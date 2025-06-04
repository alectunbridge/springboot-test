import type { Route } from "../../+types/root";

import './style-guide.scss'

export default function StyleGuide() {
    return (
        <section className='container style-guide'>
            <h1>Style Guide</h1>
            <p>Find more components over in the Pico <a href="https://picocss.com/docs">documentation</a></p>
            <h2>Buttons</h2>
            <div className='grid'>
                <button>Standard Button</button>
                <button className='secondary'>Secondary Button</button>
                <button className='contrast'>Contrast Button</button>
            </div>
            <h2>Links</h2>
            <div className='grid'>
                <a href="#">Primary</a>
                <a href="#" className="secondary">Secondary</a>
                <a href="#" className="contrast">Contrast</a>
            </div>
            <h2>Inputs</h2>
            <div className='grid'>
                <input type="text" name="text" placeholder="Text" aria-label="Text"/>
                <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email"/>
                <input type="number" name="number" placeholder="Number" aria-label="Number"/>
            </div>
            <h2>Dropdowns</h2>
            <div className='grid'>
                <details className="dropdown">
                    <summary>Dropdown</summary>
                    <ul>
                        <li><a href="#">Solid</a></li>
                        <li><a href="#">Liquid</a></li>
                        <li><a href="#">Gas</a></li>
                        <li><a href="#">Plasma</a></li>
                    </ul>
                </details>
                <select name="select" aria-label="Select" required>
                    <option selected disabled value="">Select</option>
                    <option>Solid</option>
                    <option>Liquid</option>
                    <option>Gas</option>
                    <option>Plasma</option>
                    false
                </select>
            </div>
        </section>
    );
}
