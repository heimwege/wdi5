import { wdi5 } from "wdio-ui5-service"
import Other from "tsapptest/e2e/pageObjects/Other"

export default class Page {
    async open(path) {
        wdi5.goTo(path)
    }
    async log() {
        Other.doSomething()
    }
}
