const text =
    "I enjoy reading manga, playing video games, and learning how to make the internet better in my free time.";

console.log(text);

import { createSignal, Match, Switch } from "solid-js";

const [currentDescription, setCurrentDescription] = createSignal("");

export function HeaderSubtitle() {
    return (
        
        <Switch fallback={<p>{currentDescription()} is between 5 and 10</p>}>
            <Match when={currentDescription() === 'medium'}>
                <p>{currentDescription()} is greater than 10</p>
            </Match>
            <Match when={currentDescription() === 'long'}>
                <p>{currentDescription()} is less than 5</p>
            </Match>
        </Switch>
    );
}
