import { Component, ViewEncapsulation } from "@angular/core";


@Component({
	selector: "side-nav-demo",
	template: `
	<div style="position: relative; height: 600px;">
		<h1>Side Nav Demo</h1>

		<ng-template #listTpl let-item="item">
			<cdl-glyphicon *ngIf="item.icon" icon="{{item.icon}}" size="md"></cdl-glyphicon>
			{{item.content}}
		</ng-template>

		<cdl-top-nav [brand]="topNavBrand" [badge]="topNavBadge" [fixed]="false" >
				<cdl-hamburger (onClick)="onClick($event)" hamburger></cdl-hamburger>
		</cdl-top-nav>

		<cdl-side-nav [open]="sideNavOpen">
			<cdl-side-nav-item routerLink="/table">
				<cdl-glyphicon class="side-nav-glyph" icon="lightbulb" size="md"></cdl-glyphicon>
				<span class="side-nav-item">Understand</span>
			</cdl-side-nav-item>

			<cdl-side-nav-item>
				<cdl-glyphicon class="side-nav-glyph" icon="gears" size="md"></cdl-glyphicon>
				<span class="side-nav-item">More</span>
				<cdl-side-nav-item>
					<cdl-glyphicon class="side-nav-glyph" icon="active_work" size="md"></cdl-glyphicon>
					<span class="side-nav-item">Some long content here</span>
				</cdl-side-nav-item>
				<cdl-side-nav-item>
					<span class="side-nav-item">And even longer one here</span>
					<div class="side-nav-pane-sub-template">
						<cdl-side-nav-pane-title>And even longer one here</cdl-side-nav-pane-title>
						<cdl-tree-view [items]="demoItems" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
					</div>
				</cdl-side-nav-item>
				<cdl-side-nav-item>
					<span class="side-nav-item">And here</span>
					<div class="side-nav-pane-sub-template">
						<cdl-side-nav-pane-title>And here</cdl-side-nav-pane-title>
						<cdl-tree-view [items]="demoItems2" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
					</div>
				</cdl-side-nav-item>
			</cdl-side-nav-item>

			<cdl-side-nav-item>
				<span class="side-nav-item">Even more</span>
				<cdl-side-nav-item>
					<span class="side-nav-item">To show how ellipsis gets activated</span>
				</cdl-side-nav-item>
				<cdl-side-nav-item>
					<cdl-glyphicon class="side-nav-glyph" icon="analyze" size="md"></cdl-glyphicon>
					<span class="side-nav-item">And this is how ellipsis happens</span>
					<div class="side-nav-pane-sub-template">
						<cdl-side-nav-pane-title>And this is how ellipsis happens</cdl-side-nav-pane-title>
						<cdl-tree-view [items]="demoItems3" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
					</div>
				</cdl-side-nav-item>
				<cdl-side-nav-item>
					<cdl-glyphicon class="side-nav-glyph" icon="attributes" size="md"></cdl-glyphicon>
					<span class="side-nav-item">And here</span>
					<div class="side-nav-pane-sub-template">
						<cdl-side-nav-pane-title>And here</cdl-side-nav-pane-title>
						<cdl-tree-view [items]="demoItems4" [listTpl]="listTpl" [elemSpacing]="44" ></cdl-tree-view>
					</div>
				</cdl-side-nav-item>
			</cdl-side-nav-item>
		</cdl-side-nav>
	</div>
	`,
	encapsulation: ViewEncapsulation.None
})

export class SideNavDemo {
	private topNavBadge = "Beta";
	private topNavBrand = "Neutrino";
	private sideNavOpen = true;


	private demoItems = [
		{
			content: "Understand",
			selected: false,
			icon: "alert",
			subMenu: [
				{
					content: "Experience integrations",
					selected: false,
					subMenu: [
						{
							content: "Experience integrations",
							selected: false
						},
						{
							content: "Predictive custom intelligence",
							selected: false
						},
					]
				},
				{
					content: "Predictive custom intelligence",
					selected: false
				},
			]
		},
		{
			content: "Plan",
			selected: false,
			icon: "alert"
		},
		{
			content: "Design",
			selected: false,
			icon: "alert"
		},
		{
			content: "Build",
			selected: false,
			icon: "alert"

		},
		{
			content: "Listen",
			selected: false,
			icon: "alert"

		},
		{
			content: "Optimize",
			selected: false,
			icon: "alert"

		}
	];

	private demoItems2 = this.clone(this.demoItems);
	private demoItems3 = this.clone(this.demoItems);
	private demoItems4 = this.clone(this.demoItems);

	private clone (el) {
		return JSON.parse(JSON.stringify(el));
	}

	private onClick() {
		this.sideNavOpen = !this.sideNavOpen;
	}
}
