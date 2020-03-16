export class SideNavItemDto {
    id: number = 0;
    parentId: number = 0;
    displayName: string = '';
    icon:string='';
    routerLink: string = '';
    routeParams: string[] = [];
    sortOrder: number = 0;
    children: SideNavItemDto[] = [];

    constructor(id: number, parentId: number, displayName: string,icon:string, routerLink: string, routeParams: string[], sortOrder: number, children: SideNavItemDto[]) {
        this.id = id;
        this.parentId = parentId;
        this.displayName = displayName;
        this.icon=icon;
        this.routerLink = routerLink;
        this.routeParams = routeParams;
        this.sortOrder = sortOrder;
        this.children = children;
    }
}