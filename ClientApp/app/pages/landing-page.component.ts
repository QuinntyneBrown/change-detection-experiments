import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.css"],
    selector: "ce-landing-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
    constructor(private _changeDetectorRef: ChangeDetectorRef) {
        setTimeout(() => {
            this.message = "Works but changes....";
            this._changeDetectorRef.markForCheck();
        }, 1000);
    }
    public message: string = "Works?";

}
