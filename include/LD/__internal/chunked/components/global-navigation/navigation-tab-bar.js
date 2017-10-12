var SLDS=webpackJsonpSLDS([50,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123],{0:function(e,t){e.exports=React},87:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=t.ContextTabBar=void 0;var n=l(a(0)),d=l(a(2)),s=a(7),i=a(23),c=a(3),m=l(a(1)),o=l(a(4)),r="context-tab-panel-1",u="context-tab-panel-2",b="context-tab-panel-3",f="context-tab-id-1",E="context-tab-id-2",_="context-tab-id-3",I=function(e){return n.default.createElement("span",{className:"slds-text-body_small slds-text-color_weak slds-p-left_large"},n.default.createElement("span",{className:"slds-assistive-text"},":"),e.children)},p=function(e){return n.default.createElement("li",{className:(0,m.default)("slds-context-bar__item slds-context-bar__item_tab",e.className,e.itemActive?"slds-is-active":null,e.itemUnsaved?"slds-is-unsaved":null,e.pinned?"slds-is-pinned":null),role:"presentation"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-context-bar__label-action",role:"tab",title:e.title||"tab name","aria-selected":e.itemActive?"true":"false",tabIndex:e.itemActive?"0":"-1","aria-controls":e.tabPanelId,id:e.id},e.itemUnsaved?n.default.createElement("abbr",{className:"slds-indicator_unsaved",title:"Tab Not Saved"},"*"):null,n.default.createElement("div",{className:"slds-icon_container",title:o.default.startCase(e.symbol)||"Case"},n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:e.symbol||"case"}),n.default.createElement("span",{className:"slds-assistive-text"},o.default.startCase(e.symbol)||"Case")),n.default.createElement("span",{className:(0,m.default)("slds-truncate",e.pinned?"slds-assistive-text":null),title:e.title||"tab name"},e.title||"tab name")),n.default.createElement("div",{className:(0,m.default)("slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none","true"==e.actionOverflow?"slds-is-open":null)},n.default.createElement(c.ButtonIcon,{className:"slds-button_icon-container slds-button_icon-x-small",tabIndex:e.itemActive?"0":"-1",symbol:"chevrondown","aria-haspopup":"true",assistiveText:"Actions for "+e.title,title:"Actions for "+e.title}),n.default.createElement(s.Menu,{className:"slds-dropdown_right"},n.default.createElement(s.MenuList,null,n.default.createElement(s.MenuItem,{iconRight:n.default.createElement(I,null,"r")},"Refresh Tab"),n.default.createElement(s.MenuItem,{iconRight:n.default.createElement(I,null,"⇧ + n")},"Open in a new window"),n.default.createElement(s.MenuItem,{iconRight:n.default.createElement(I,null,"p")},"Pin Tab"),n.default.createElement(s.MenuItem,{iconRight:n.default.createElement(I,null,"w")},"Close Tab")))),e.pinned?null:n.default.createElement("div",{className:"slds-context-bar__icon-action slds-col_bump-left slds-p-left_none"},n.default.createElement(c.ButtonIcon,{className:"slds-button_icon-container slds-button_icon-x-small",tabIndex:e.itemActive?"0":"-1",symbol:"close",assistiveText:"Close "+e.title,title:"Close "+e.title})))},T=function(e){return n.default.createElement("div",{id:e.id,className:(0,m.default)("slds-p-vertical_medium",e.show?"slds-show":"slds-hide"),role:"tabpanel","aria-labelledby":e.tabId},e.children)},v=t.ContextTabBar=function(e){return n.default.createElement("div",{className:(0,m.default)("slds-context-bar slds-context-bar_tabs",e.className)},n.default.createElement("div",{className:"slds-context-bar__primary"},n.default.createElement("div",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover"},n.default.createElement("div",{className:"slds-context-bar__icon-action"},n.default.createElement(i.WaffleIcon,{className:"slds-context-bar__button"})),n.default.createElement("span",{className:"slds-context-bar__label-action slds-context-bar__app-name"},n.default.createElement("span",{className:"slds-truncate",title:e.appName||"App Name"},e.appName||"App Name"))),n.default.createElement("div",{className:(0,m.default)("slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click",e.objectSwitchClassName)},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-context-bar__label-action"},n.default.createElement("span",{className:"slds-truncate",title:"Object"},"Object")),n.default.createElement("div",{className:"slds-context-bar__icon-action"},n.default.createElement(c.ButtonIcon,{className:"slds-button_icon-container slds-button_icon-x-small",symbol:"chevrondown","aria-haspopup":"true",assistiveText:"Open object switcher menu",title:"Open object switcher menu"})),n.default.createElement(s.Menu,{className:"slds-dropdown_right"},n.default.createElement(s.MenuList,null,n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small",sprite:"standard",symbol:"account"}),"Accounts"),n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small",sprite:"standard",symbol:"case"}),"Cases"),n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-standard-work-order slds-m-right_small",sprite:"standard",symbol:"work_order"}),"Insights")))),n.default.createElement("div",{className:(0,m.default)("slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click",e.addTabClassName)},n.default.createElement("div",{className:"slds-context-bar__icon-action"},n.default.createElement(c.ButtonIcon,{className:(0,m.default)("slds-button_icon-container slds-button_icon-small",e.splitViewActive?"slds-is-selected":null),symbol:"side_list",assistiveText:"Toggle split view",title:"Toggle split view","aria-expanded":e.splitViewActive?"true":"false","aria-controls":"id_of_split_view_container"}))),n.default.createElement("div",{className:"slds-context-bar__vertical-divider"}),n.default.createElement("div",{className:(0,m.default)("slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click",e.addTabActive?"slds-is-open":null,e.addTabClassName)},n.default.createElement("div",{className:"slds-context-bar__icon-action"},n.default.createElement(c.ButtonIcon,{className:"slds-button_icon-container slds-button_icon-small",symbol:"add",assistiveText:"Open a New Tab",title:"Open a New Tab"})),e.addTabActive?n.default.createElement("section",{className:"slds-popover slds-nubbin_top",role:"dialog","aria-label":"Add tab by URL or ID",style:{position:"absolute",left:"1.125rem",top:"2.75rem",marginLeft:"-10rem"}},n.default.createElement("div",{className:"slds-popover__body"},n.default.createElement("div",{className:"slds-form-element"},n.default.createElement("label",{className:"slds-form-element__label",htmlFor:"text-input-01"},"Add Page by URL or ID"),n.default.createElement("div",{className:"slds-form-element__control slds-grid"},n.default.createElement("input",{id:"text-input-01",className:"slds-input",type:"text",placeholder:"Placeholder Text"}),n.default.createElement("button",{className:"slds-button slds-button_brand slds-shrink-none slds-m-left_small",type:"submit"},"Add Tab"))))):null)),n.default.createElement("div",{className:"slds-context-bar__secondary"},n.default.createElement("div",{className:"slds-context-bar__vertical-divider"}),n.default.createElement("ul",{className:"slds-grid",role:"tablist"},e.children)))};t.Context=function(e){return n.default.createElement("div",{style:{height:"16rem"}},e.children)};t.default=n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"));t.states=[{id:"split-view",label:"Split View - Active",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,{splitViewActive:!0},n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"tab-active",label:"Tab - Active",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{show:!0,id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"tab-active-focus",label:"Tab - Active Focus",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E,itemActive:!0,className:"slds-has-focus"}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{show:!0,id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"tab-item-action-menu-open",label:"Tab - Action Overflow",element:n.default.createElement("div",{className:"demo-only",style:{height:"12rem"}},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E,itemActive:!0,actionOverflow:"true"}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{show:!0,id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"pinned-tab",label:"Pinned Tab",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,pinned:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{show:!0,id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"pinned-tab-active",label:"Pinned Tab - Active",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0,pinned:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"pinned-tab-active-focus",label:"Pinned Tab - Active Focus",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0,pinned:!0,className:"slds-has-focus"}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"unsaved-pinned-tab",label:"Unsaved Pinned Tab",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,pinned:!0,itemUnsaved:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{show:!0,id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"unsaved-tab",label:"Unsaved Tab",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_,itemUnsaved:!0})),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"overflow-tabs",label:"Overflow Tabs",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_}),n.default.createElement("li",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click"},n.default.createElement("button",{className:"slds-button slds-context-bar__label-action","aria-haspopup":"true"},n.default.createElement("span",{className:"slds-p-left_xx-small slds-truncate",title:"More Tab Items"},"More ",n.default.createElement("span",{className:"slds-assistive-text"},"Tabs")),n.default.createElement(d.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_right",sprite:"utility",symbol:"chevrondown"})))),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"overflow-tabs-open",label:"Overflow Tabs - Open",element:n.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_}),n.default.createElement("li",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"},n.default.createElement("button",{className:"slds-button slds-context-bar__label-action","aria-haspopup":"true"},n.default.createElement("span",{className:"slds-p-left_xx-small slds-truncate",title:"More Tab Items"},"More ",n.default.createElement("span",{className:"slds-assistive-text"},"Tabs")),n.default.createElement(d.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_right",sprite:"utility",symbol:"chevrondown"})),n.default.createElement(s.Menu,{className:"slds-dropdown_right"},n.default.createElement(s.MenuList,null,n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"case"}),n.default.createElement("span",null,"Overflow Tab Item")),n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"case"}),n.default.createElement("span",null,"Overflow Tab Item")))))),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"unsaved-overflow-tabs",label:"Unsaved Overflow Tabs",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_}),n.default.createElement("li",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-is-unsaved"},n.default.createElement("button",{className:"slds-button slds-context-bar__label-action",title:"More Tab Items","aria-haspopup":"true"},n.default.createElement("abbr",{className:"slds-indicator_unsaved",title:"Tab(s) within menu not saved"},"*"),n.default.createElement("span",{className:"slds-p-left_xx-small slds-truncate",title:"More Tabs"},"More ",n.default.createElement("span",{className:"slds-assistive-text"},"Tabs")),n.default.createElement(d.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_right",sprite:"utility",symbol:"chevrondown"})))),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"unsaved-overflow-tabs-open",label:"Unsaved Overflow Tabs - Open",element:n.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},n.default.createElement(v,null,n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f,itemActive:!0}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_}),n.default.createElement("li",{className:"slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open slds-is-unsaved"},n.default.createElement("button",{className:"slds-button slds-context-bar__label-action",title:"More Tab Items","aria-haspopup":"true"},n.default.createElement("abbr",{className:"slds-indicator_unsaved",title:"Tab(s) within menu not saved"},"*"),n.default.createElement("span",{className:"slds-p-left_xx-small slds-truncate",title:"More Tabs"},"More ",n.default.createElement("span",{className:"slds-assistive-text"},"Tabs")),n.default.createElement(d.default,{className:"slds-button__icon slds-button__icon_small slds-button__icon_right",sprite:"utility",symbol:"chevrondown"})),n.default.createElement(s.Menu,{className:"slds-dropdown_right"},n.default.createElement(s.MenuList,null,n.default.createElement(s.MenuItem,{className:"slds-is-unsaved"},n.default.createElement("abbr",{className:"slds-unsaved-indicator",title:"Tab(s) within menu not saved"},"*"),n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"case"}),n.default.createElement("span",null,"Overflow Tab Item")),n.default.createElement(s.MenuItem,null,n.default.createElement(d.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"case"}),n.default.createElement("span",null,"Overflow Tab Item")))))),n.default.createElement(T,{show:!0,id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"object-switcher-active",label:"Object Switcher - Active",element:n.default.createElement("div",{className:"demo-only"},n.default.createElement(v,{objectSwitchClassName:"slds-is-active"},n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"object-switcher-menu-open",label:"Object Switcher - Open",element:n.default.createElement("div",{className:"demo-only",style:{height:"11rem"}},n.default.createElement(v,{objectSwitchClassName:"slds-is-open"},n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))},{id:"add-tab-dialog-open",label:"Add Tab Dialog - Open",element:n.default.createElement("div",{className:"demo-only",style:{height:"8rem"}},n.default.createElement(v,{addTabActive:!0},n.default.createElement(p,{title:"Home",symbol:"home",tabPanelId:r,id:f}),n.default.createElement(p,{title:"Tab Item 1",tabPanelId:u,id:E}),n.default.createElement(p,{title:"Tab Item 2",tabPanelId:b,id:_})),n.default.createElement(T,{id:r,tabId:f},"Tab Home Content"),n.default.createElement(T,{id:u,tabId:E},"Tab One Content"),n.default.createElement(T,{id:b,tabId:_},"Tab Two Content"))}]}},[87]);