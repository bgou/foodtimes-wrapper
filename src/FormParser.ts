import "@babel/polyfill";
import puppeteer from "puppeteer"

export interface Props {
    x: number;
    y: number;
}

export class FormParser {
    private value = 10
    private props: Props = { x: 0, y: 0 };

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setProps(props: Props) {
        this.props = props;
    }

    getProps(): Props {
        return this.props;
    }

    getMenu(): any {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://google.com");
            await page.screenshot({ path: "google.png" });

            await browser.close();
        })();
    }
}

