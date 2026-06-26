type QRCodeStylingInstance = {
  append(container?: HTMLElement): void;
  update(options?: Record<string, unknown>): void;
  download(options?: { name?: string; extension?: "png" | "svg" }): Promise<void>;
};

type QRCodeStylingConstructor = new (options?: Record<string, unknown>) => QRCodeStylingInstance;

const numberAttribute = (element: HTMLElement, name: string, fallback: number) => {
  const value = Number(element.getAttribute(name));
  return Number.isFinite(value) ? value : fallback;
};

const stringAttribute = (element: HTMLElement, name: string, fallback: string) =>
  element.getAttribute(name) || fallback;

class QRCodeDesigner extends HTMLElement {
  static observedAttributes = [
    "background-color",
    "corners-dot-color",
    "corners-dot-type",
    "corners-square-color",
    "corners-square-type",
    "data",
    "dots-color",
    "dots-type",
    "error-correction",
    "file-name",
    "image",
    "margin",
    "size",
  ];

  #container: HTMLElement | undefined;
  #qrCode: QRCodeStylingInstance | undefined;
  #QRCodeStyling: QRCodeStylingConstructor | undefined;
  #renderQueued = false;

  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.querySelector(".qr-code-designer-shell")) {
      this.innerHTML = `
        <div class="qr-code-designer-shell" data-ignore>
          <div class="qr-code-designer-preview"></div>
          <div class="qr-code-designer-actions">
            <button type="button" data-download="svg">Download SVG</button>
            <button type="button" class="secondary" data-download="png">Download PNG</button>
          </div>
        </div>
      `;
      this.querySelector('[data-download="svg"]')?.addEventListener("click", () => this.#download("svg"));
      this.querySelector('[data-download="png"]')?.addEventListener("click", () => this.#download("png"));
    }

    this.#container = this.querySelector(".qr-code-designer-preview") ?? undefined;
    void this.#render();
  }

  attributeChangedCallback() {
    if (!this.isConnected || this.#renderQueued) {
      return;
    }

    this.#renderQueued = true;
    queueMicrotask(() => {
      this.#renderQueued = false;
      void this.#render();
    });
  }

  async #loadLibrary() {
    if (!this.#QRCodeStyling) {
      const module = await import("qr-code-styling");
      this.#QRCodeStyling = module.default as QRCodeStylingConstructor;
    }
    return this.#QRCodeStyling;
  }

  #options() {
    const size = numberAttribute(this, "size", 320);
    const image = stringAttribute(this, "image", "");

    return {
      width: size,
      height: size,
      type: "svg",
      data: stringAttribute(this, "data", "https://ryanbaird.com"),
      image: image || undefined,
      margin: numberAttribute(this, "margin", 12),
      qrOptions: {
        errorCorrectionLevel: stringAttribute(this, "error-correction", "H"),
      },
      dotsOptions: {
        type: stringAttribute(this, "dots-type", "rounded"),
        color: stringAttribute(this, "dots-color", "#191919"),
      },
      cornersSquareOptions: {
        type: stringAttribute(this, "corners-square-type", "extra-rounded"),
        color: stringAttribute(this, "corners-square-color", "#0f766e"),
      },
      cornersDotOptions: {
        type: stringAttribute(this, "corners-dot-type", "dot"),
        color: stringAttribute(this, "corners-dot-color", "#7c2d12"),
      },
      backgroundOptions: {
        color: stringAttribute(this, "background-color", "#ffffff"),
      },
      imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: true,
        imageSize: 0.32,
        margin: 6,
        saveAsBlob: true,
      },
    };
  }

  async #render() {
    if (!this.#container) {
      return;
    }

    const QRCodeStyling = await this.#loadLibrary();
    const options = this.#options();

    if (!this.#qrCode) {
      this.#qrCode = new QRCodeStyling(options);
      this.#qrCode.append(this.#container);
      return;
    }

    this.#qrCode.update(options);
  }

  async #download(extension: "png" | "svg") {
    await this.#render();
    await this.#qrCode?.download({
      name: stringAttribute(this, "file-name", "qr-code"),
      extension,
    });
  }
}

if (!customElements.get("qr-code-designer")) {
  customElements.define("qr-code-designer", QRCodeDesigner);
}
