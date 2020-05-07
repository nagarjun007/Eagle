/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6WKn":function(l,n,e){"use strict";e.d(n,"a",function(){return t});class t{}},"6dxO":function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e("lGQG"),e("jVo2"),e("9L4E");class t{constructor(l,n,e){this.snackBar=l,this.authSvc=n,this.socialSvc=e,this.discussionRequest={pgNo:0,pgSize:4,postKind:[],sessionId:Date.now(),type:"discussionForum",userId:this.authSvc.userId,source:void 0},this.isPostingDiscussion=!1,this.discussionResult={hits:0,result:[]},this.isValidPost=!1,this.userEmail=this.authSvc.userEmail}ngOnInit(){this.discussionForumInput.initialPostCount&&(this.discussionRequest.pgSize=this.discussionForumInput.initialPostCount),this.discussionRequest.source={contentId:this.discussionForumInput.contentId,sourceName:this.discussionForumInput.sourceName},this.fetchDiscussion()}fetchDiscussion(l=!1){this.discussionFetchStatus="fetching",l&&(this.discussionRequest.sessionId=Date.now(),this.discussionRequest.pgNo=0),this.socialSvc.fetchTimelineData(this.discussionRequest).subscribe(n=>{n.hits&&n.result?(l&&(this.discussionResult={hits:0,result:[]}),this.discussionResult.hits=n.hits,this.discussionResult.result=[...this.discussionResult.result,...n.result],n.hits>this.discussionResult.result.length?(this.discussionFetchStatus="hasMore",this.discussionRequest.pgNo+=1):this.discussionFetchStatus="done"):this.discussionResult.result.length||(this.discussionFetchStatus="none")},l=>{this.discussionFetchStatus="error"})}publishConversation(l){this.isPostingDiscussion=!0,this.socialSvc.publishPost({postContent:{abstract:"",body:"",title:this.editorText},postCreator:this.authSvc.userId,postKind:"Blog",source:{id:this.discussionForumInput.contentId,name:this.discussionForumInput.sourceName}}).subscribe(l=>{this.editorText=void 0,this.isValidPost=!1,this.isPostingDiscussion=!1,this.editorQuill.resetEditor(),this.fetchDiscussion(!0)},n=>{this.snackBar.open(l),this.isPostingDiscussion=!1})}onDeletePost(l){this.discussionResult.result.splice(l,1),this.discussionResult.hits-=1,this.discussionResult.result.length||(this.discussionFetchStatus="none")}onTextChange(l){this.isValidPost=l.isValid,this.editorText=l.htmlText}}},I3Vn:function(l,n,e){"use strict";var t=e("8Y7J"),i=e("HeqF"),u=e("C39E"),o=e("bujt"),s=e("Fwaw"),a=e("/HVE"),d=e("5GAg"),r=e("omvX"),c=e("gavF"),p=e("QQfA"),m=e("IP0z"),h=e("Mr+X"),v=e("Gi4r"),g=e("wkXD"),b=e("9L4E"),f=e("f5wn"),y=e("b3xe"),R=e("lGQG"),x=e("jVo2"),C=e("dFDH"),I=e("s6ns"),w=e("VX4o"),P=e("v7ih"),_=e("6xcj"),k=e("2Q+G"),M=e("SVse"),S=e("2ZRA"),T=e("N2hZ"),E=e("qcl3");class D{constructor(l,n,e,i){this.dialog=l,this.snackBar=n,this.authSvc=e,this.socialSvc=i,this.deleteSuccess=new t.EventEmitter,this.userId=this.authSvc.userId,this.editMode=!1,this.replyPostEnabled=!1}ngOnInit(){}deletePost(l){this.dialog.open(E.a,{data:{postId:this.reply.id}}).afterClosed().subscribe(l=>{l&&this.deleteSuccess.emit(!0)},n=>{this.snackBar.open(l)})}editReply(l){this.reply.postContent.body=this.updatedBody,this.editMode=!1,this.socialSvc.updatePost({editor:this.authSvc.userId,id:this.reply.id,meta:{abstract:"",body:this.updatedBody,title:""},postKind:"Reply"}).subscribe(l=>{this.updatedBody=void 0},n=>{this.editMode=!0,this.snackBar.open(l)})}onReplyTextChange(l){this.replyPostEnabled=l.isValid,this.updatedBody=l.htmlText}}var O=t["\u0275crt"]({encapsulation:0,styles:[[".reply-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;margin-top:4px;padding:12px}.user-image[_ngcontent-%COMP%]{display:inline-block;width:36px;height:36px;font-size:36px}"]],data:{}});function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,16777216,null,null,5,"button",[["aria-haspopup","true"],["mat-icon-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-expanded",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],function(l,n,e){var i=!0;return"mousedown"===n&&(i=!1!==t["\u0275nov"](l,2)._handleMousedown(e)&&i),"keydown"===n&&(i=!1!==t["\u0275nov"](l,2)._handleKeydown(e)&&i),"click"===n&&(i=!1!==t["\u0275nov"](l,2)._handleClick(e)&&i),i},o.d,o.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],null,null),t["\u0275did"](2,1196032,null,0,c.g,[p.c,t.ElementRef,t.ViewContainerRef,c.b,[2,c.c],[8,null],[2,m.b],d.h],{menu:[0,"menu"]},null),(l()(),t["\u0275eld"](3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),t["\u0275did"](4,9158656,null,0,v.b,[t.ElementRef,v.d,[8,null],[2,v.a]],null,null),(l()(),t["\u0275ted"](-1,0,["more_vertical"])),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,t["\u0275nov"](n.parent,27)),l(n,4,0)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).disabled||null,"NoopAnimations"===t["\u0275nov"](n,1)._animationMode,t["\u0275nov"](n,2).menuOpen||null),l(n,3,0,t["\u0275nov"](n,4).inline,"primary"!==t["\u0275nov"](n,4).color&&"accent"!==t["\u0275nov"](n,4).color&&"warn"!==t["\u0275nov"](n,4).color)})}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","margin-top-s"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.reply.postContent.body)})}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","margin-top-s padding-s mat-primary-border"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-editor-quill",[],null,[[null,"textData"]],function(l,n,e){var t=!0;return"textData"===n&&(t=!1!==l.component.onReplyTextChange(e)&&t),t},g.b,g.a)),t["\u0275did"](2,114688,null,0,b.a,[],{htmlText:[0,"htmlText"],minLength:[1,"minLength"]},{textData:"textData"}),(l()(),t["\u0275eld"](3,0,null,null,6,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,2,"button",[["class","margin-top-s"],["color","primary"],["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.editReply(t["\u0275nov"](l.parent,33).value)&&i),i},o.d,o.b)),t["\u0275did"](5,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Update "])),(l()(),t["\u0275eld"](7,0,null,null,2,"button",[["class","margin-top-s margin-left-s"],["color","primary"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=0!=(l.component.editMode=!1)&&t),t},o.d,o.b)),t["\u0275did"](8,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Abbrechen "]))],function(l,n){var e=n.component;l(n,2,0,e.reply.postContent.body,"10"),l(n,5,0,!e.replyPostEnabled,"primary"),l(n,8,0,"primary")},function(l,n){l(n,4,0,t["\u0275nov"](n,5).disabled||null,"NoopAnimations"===t["\u0275nov"](n,5)._animationMode),l(n,7,0,t["\u0275nov"](n,8).disabled||null,"NoopAnimations"===t["\u0275nov"](n,8)._animationMode)})}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"span",[["class","margin-top-s flex flex-between"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"app-btn-vote",[],null,null,null,f.b,f.a)),t["\u0275did"](3,114688,null,0,y.a,[R.a,x.a,C.c,I.e,w.a],{voteType:[0,"voteType"],postId:[1,"postId"],postCreatorId:[2,"postCreatorId"],activity:[3,"activity"]},null),(l()(),t["\u0275eld"](4,0,null,null,1,"app-btn-vote",[["class","margin-left-s"]],null,null,null,f.b,f.a)),t["\u0275did"](5,114688,null,0,y.a,[R.a,x.a,C.c,I.e,w.a],{voteType:[0,"voteType"],postId:[1,"postId"],postCreatorId:[2,"postCreatorId"],activity:[3,"activity"]},null),(l()(),t["\u0275eld"](6,0,null,null,1,"app-btn-like",[],null,null,null,P.b,P.a)),t["\u0275did"](7,114688,null,0,_.a,[R.a,x.a,C.c,I.e,w.a],{postId:[0,"postId"],postCreatorId:[1,"postCreatorId"],activity:[2,"activity"]},null)],function(l,n){var e=n.component;l(n,3,0,"upVote",e.reply.id,null==e.reply?null:null==e.reply.postCreator?null:e.reply.postCreator.postCreatorId,e.reply.activity),l(n,5,0,"downVote",e.reply.id,null==e.reply?null:null==e.reply.postCreator?null:e.reply.postCreator.postCreatorId,e.reply.activity),l(n,7,0,e.reply.id,null==e.reply?null:null==e.reply.postCreator?null:e.reply.postCreator.postCreatorId,e.reply.activity)},null)}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["type","button"]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,e){var i=!0,u=l.component;return"click"===n&&(i=!1!==t["\u0275nov"](l,1)._checkDisabled(e)&&i),"mouseenter"===n&&(i=!1!==t["\u0275nov"](l,1)._handleMouseEnter()&&i),"click"===n&&(i=0!=(u.editMode=!0)&&i),i},k.c,k.b)),t["\u0275did"](1,180224,[[1,4]],0,c.e,[t.ElementRef,M.d,d.h,[2,c.i]],null,null),(l()(),t["\u0275ted"](-1,0,["Bearbeiten"])),(l()(),t["\u0275eld"](3,0,null,null,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["type","button"]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,e){var i=!0,u=l.component;return"click"===n&&(i=!1!==t["\u0275nov"](l,4)._checkDisabled(e)&&i),"mouseenter"===n&&(i=!1!==t["\u0275nov"](l,4)._handleMouseEnter()&&i),"click"===n&&(i=!1!==u.deletePost(t["\u0275nov"](l.parent,32).value)&&i),i},k.c,k.b)),t["\u0275did"](4,180224,[[1,4]],0,c.e,[t.ElementRef,M.d,d.h,[2,c.i]],null,null),(l()(),t["\u0275ted"](-1,0,["L\xf6schen"]))],null,function(l,n){l(n,0,0,t["\u0275nov"](n,1).role,t["\u0275nov"](n,1)._highlighted,t["\u0275nov"](n,1)._triggersSubmenu,t["\u0275nov"](n,1)._getTabIndex(),t["\u0275nov"](n,1).disabled.toString(),t["\u0275nov"](n,1).disabled||null),l(n,3,0,t["\u0275nov"](n,4).role,t["\u0275nov"](n,4)._highlighted,t["\u0275nov"](n,4)._triggersSubmenu,t["\u0275nov"](n,4)._getTabIndex(),t["\u0275nov"](n,4).disabled.toString(),t["\u0275nov"](n,4).disabled||null)})}function B(l){return t["\u0275vid"](0,[t["\u0275pid"](0,M.e,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,23,"div",[["class","reply-container mat-app-background"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"app-user-image",[["class","user-image"]],null,null,null,S.b,S.a)),t["\u0275did"](3,114688,null,0,T.a,[],{email:[0,"email"]},null),(l()(),t["\u0275eld"](4,0,null,null,20,"div",[["class","padding-left-s width-expand"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,13,"div",[["class","flex flex-between"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"span",[["class","mat-primary-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](8,null,["",""])),(l()(),t["\u0275eld"](9,0,null,null,7,"div",[["class","mat-caption"]],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,[" "," "])),t["\u0275ppd"](11,1),(l()(),t["\u0275eld"](12,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" at "])),(l()(),t["\u0275eld"](14,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t["\u0275ted"](15,null,["",""])),t["\u0275ppd"](16,2),(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](18,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](20,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,q)),t["\u0275did"](22,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,N)),t["\u0275did"](24,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](25,0,null,null,6,"mat-menu",[],null,null,null,k.d,k.a)),t["\u0275prd"](6144,null,c.i,null,[c.c]),t["\u0275did"](27,1294336,[["editMenu",4]],2,c.c,[t.ElementRef,t.NgZone,c.a],null,null),t["\u0275qud"](603979776,1,{items:1}),t["\u0275qud"](335544320,2,{lazyContent:0}),(l()(),t["\u0275and"](16777216,null,0,1,null,A)),t["\u0275did"](31,147456,[[2,4]],0,c.d,[t.TemplateRef,t.ComponentFactoryResolver,t.ApplicationRef,t.Injector,t.ViewContainerRef,M.d],null,null),(l()(),t["\u0275eld"](32,0,[["deleteFailMsg",1]],null,0,"input",[["i8n-value",""],["type","hidden"],["value","Something went wrong! Unable to delete."]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,[["editFailMsg",1]],null,0,"input",[["i8n-value",""],["type","hidden"],["value","Something went wrong! Unable to post."]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,3,0,e.reply.postCreator.emailId),l(n,18,0,e.userId===e.reply.postCreator.postCreatorId),l(n,20,0,!e.editMode),l(n,22,0,e.editMode),l(n,24,0,e.reply.activity&&"Active"===e.reply.status),l(n,27,0)},function(l,n){var e=n.component;l(n,8,0,e.reply.postCreator.name);var i=t["\u0275unv"](n,10,0,l(n,11,0,t["\u0275nov"](n,0),e.reply.dtLastModified));l(n,10,0,i);var u=t["\u0275unv"](n,15,0,l(n,16,0,t["\u0275nov"](n,0),e.reply.dtLastModified,"shortTime"));l(n,15,0,u)})}var L=e("lzlj"),z=e("igqZ");class W{constructor(l,n,e,i){this.dialog=l,this.snackBar=n,this.authSvc=e,this.socialSvc=i,this.deleteSuccess=new t.EventEmitter,this.editMode=!1,this.postPublishEnabled=!1,this.userId=this.authSvc.userId,this.userEmail=this.authSvc.userEmail,this.replyPlaceholderToggler=!1,this.isValidReply=!1,this.isPostingReply=!1,this.conversationRequest={postId:void 0,userId:this.authSvc.userId,answerId:"",postKind:[],sessionId:Date.now(),sortOrder:"latest-desc",pgNo:0,pgSize:2},this.postReplies=[],this.isNewRepliesAvailable=!1}ngOnInit(){this.conversationRequest.postId=this.post.id,this.fetchPostReplies()}deletePost(l){this.dialog.open(E.a,{data:{postId:this.post.id}}).afterClosed().subscribe(l=>{l&&this.deleteSuccess.emit(!0)},n=>{this.snackBar.open(l)})}editPost(l){this.post.postContent.title=this.updatedBody,this.editMode=!1,this.socialSvc.updatePost({editor:this.authSvc.userId,id:this.post.id,meta:{abstract:"",body:"",title:this.updatedBody},postKind:"Blog"}).subscribe(l=>{this.updatedBody=void 0},n=>{this.editMode=!0,this.snackBar.open(l)})}onTextChange(l){this.postPublishEnabled=l.isValid,this.updatedBody=l.htmlText}publishReply(l){this.isPostingReply=!0,this.socialSvc.postReplyOrComment({parentId:this.post.id,postContent:{body:this.replyBody},postCreator:this.authSvc.userId,postKind:"Reply",source:this.post.source}).subscribe(l=>{this.fetchPostReplies(!0),this.isPostingReply=!1,this.replyPlaceholderToggler=!this.replyPlaceholderToggler,this.discussionReplyEditor.resetEditor(),this.isValidReply=!1,this.replyBody=void 0},n=>{this.snackBar.open(l),this.isPostingReply=!1})}onReplyTextChange(l){this.isValidReply=l.isValid,this.replyBody=l.htmlText}fetchPostReplies(l=!1){"fetching"!==this.replyFetchStatus&&(l&&(this.conversationRequest.pgNo=0,this.conversationRequest.sessionId=Date.now()),this.replyFetchStatus="fetching",this.isNewRepliesAvailable=!1,this.socialSvc.fetchConversationData(this.conversationRequest).subscribe(n=>{n&&(this.isNewRepliesAvailable=!!n.newPostCount,l&&(this.postReplies=[]),this.postReplies=[...this.postReplies,...n.replyPost||[]],this.replyFetchStatus=n.postCount?"hasMore":this.postReplies.length?"done":"none",this.conversationRequest.pgNo+=1)}))}onDeleteReply(l){this.postReplies.splice(l,1)}}var j=t["\u0275crt"]({encapsulation:0,styles:[[".main-post-user-image[_ngcontent-%COMP%]{display:inline-block;width:48px;height:48px;font-size:48px}.write-reply-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;padding:12px;margin-top:4px}.write-reply-container[_ngcontent-%COMP%]   .write-reply-user-image[_ngcontent-%COMP%]{display:inline-block;width:36px;height:36px;font-size:36px}.write-reply-container[_ngcontent-%COMP%]   .write-reply-placeholder[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;background:#fff;padding-left:12px;cursor:pointer}.write-reply-container[_ngcontent-%COMP%]   .write-reply-editor[_ngcontent-%COMP%]{display:block;padding:12px 12px 0}.background-white[_ngcontent-%COMP%]{background:#fff}"]],data:{}});function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,16777216,null,null,5,"button",[["aria-haspopup","true"],["mat-icon-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-expanded",0]],[[null,"mousedown"],[null,"keydown"],[null,"click"]],function(l,n,e){var i=!0;return"mousedown"===n&&(i=!1!==t["\u0275nov"](l,2)._handleMousedown(e)&&i),"keydown"===n&&(i=!1!==t["\u0275nov"](l,2)._handleKeydown(e)&&i),"click"===n&&(i=!1!==t["\u0275nov"](l,2)._handleClick(e)&&i),i},o.d,o.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],null,null),t["\u0275did"](2,1196032,null,0,c.g,[p.c,t.ElementRef,t.ViewContainerRef,c.b,[2,c.c],[8,null],[2,m.b],d.h],{menu:[0,"menu"]},null),(l()(),t["\u0275eld"](3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,h.b,h.a)),t["\u0275did"](4,9158656,null,0,v.b,[t.ElementRef,v.d,[8,null],[2,v.a]],null,null),(l()(),t["\u0275ted"](-1,0,["more_vertical"])),(l()(),t["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,t["\u0275nov"](n.parent,53)),l(n,4,0)},function(l,n){l(n,0,0,t["\u0275nov"](n,1).disabled||null,"NoopAnimations"===t["\u0275nov"](n,1)._animationMode,t["\u0275nov"](n,2).menuOpen||null),l(n,3,0,t["\u0275nov"](n,4).inline,"primary"!==t["\u0275nov"](n,4).color&&"accent"!==t["\u0275nov"](n,4).color&&"warn"!==t["\u0275nov"](n,4).color)})}function Q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,0,"div",[["class","margin-top-s"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.post.postContent.title)})}function U(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,9,"div",[["class","margin-top-s padding-s mat-primary-border"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-editor-quill",[],null,[[null,"textData"]],function(l,n,e){var t=!0;return"textData"===n&&(t=!1!==l.component.onTextChange(e)&&t),t},g.b,g.a)),t["\u0275did"](2,114688,null,0,b.a,[],{htmlText:[0,"htmlText"],minLength:[1,"minLength"]},{textData:"textData"}),(l()(),t["\u0275eld"](3,0,null,null,6,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,2,"button",[["class","margin-top-s"],["color","primary"],["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.editPost(t["\u0275nov"](l.parent,59).value)&&i),i},o.d,o.b)),t["\u0275did"](5,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Update "])),(l()(),t["\u0275eld"](7,0,null,null,2,"button",[["class","margin-top-s margin-left-s"],["color","primary"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=0!=(l.component.editMode=!1)&&t),t},o.d,o.b)),t["\u0275did"](8,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Abbrechen "]))],function(l,n){var e=n.component;l(n,2,0,e.post.postContent.title,"10"),l(n,5,0,!e.postPublishEnabled,"primary"),l(n,8,0,"primary")},function(l,n){l(n,4,0,t["\u0275nov"](n,5).disabled||null,"NoopAnimations"===t["\u0275nov"](n,5)._animationMode),l(n,7,0,t["\u0275nov"](n,8).disabled||null,"NoopAnimations"===t["\u0275nov"](n,8)._animationMode)})}function G(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"span",[["class","flex flex-between"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"app-btn-vote",[],null,null,null,f.b,f.a)),t["\u0275did"](3,114688,null,0,y.a,[R.a,x.a,C.c,I.e,w.a],{voteType:[0,"voteType"],postId:[1,"postId"],postCreatorId:[2,"postCreatorId"],activity:[3,"activity"]},null),(l()(),t["\u0275eld"](4,0,null,null,1,"app-btn-vote",[["class","margin-left-xs"]],null,null,null,f.b,f.a)),t["\u0275did"](5,114688,null,0,y.a,[R.a,x.a,C.c,I.e,w.a],{voteType:[0,"voteType"],postId:[1,"postId"],postCreatorId:[2,"postCreatorId"],activity:[3,"activity"]},null),(l()(),t["\u0275eld"](6,0,null,null,1,"app-btn-like",[],null,null,null,P.b,P.a)),t["\u0275did"](7,114688,null,0,_.a,[R.a,x.a,C.c,I.e,w.a],{postId:[0,"postId"],postCreatorId:[1,"postCreatorId"],activity:[2,"activity"]},null)],function(l,n){var e=n.component;l(n,3,0,"upVote",e.post.id,null==e.post?null:null==e.post.postCreator?null:e.post.postCreator.postCreatorId,e.post.activity),l(n,5,0,"downVote",e.post.id,null==e.post?null:null==e.post.postCreator?null:e.post.postCreator.postCreatorId,e.post.activity),l(n,7,0,e.post.id,null==e.post?null:null==e.post.postCreator?null:e.post.postCreator.postCreatorId,e.post.activity)},null)}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-spinner",[],null,null,null,i.b,i.a)),t["\u0275did"](2,49152,null,0,u.a,[],{spinSize:[0,"spinSize"],spinWidth:[1,"spinWidth"]},null)],function(l,n){l(n,2,0,"small","thin")},null)}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ws-discussion-reply",[],null,[[null,"deleteSuccess"]],function(l,n,e){var t=!0;return"deleteSuccess"===n&&(t=!1!==l.component.onDeleteReply(l.context.index)&&t),t},B,O)),t["\u0275did"](1,114688,null,0,D,[I.e,C.c,R.a,x.a],{reply:[0,"reply"]},{deleteSuccess:"deleteSuccess"})],function(l,n){l(n,1,0,n.context.$implicit)},null)}function X(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","margin-top-s text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-spinner",[],null,null,null,i.b,i.a)),t["\u0275did"](2,49152,null,0,u.a,[],{spinSize:[0,"spinSize"],spinWidth:[1,"spinWidth"]},null),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","margin-top-xs"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Fetching replies"]))],function(l,n){l(n,2,0,"small","thin")},null)}function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.fetchPostReplies()&&t),t},o.d,o.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Load Previous Replies "]))],function(l,n){l(n,1,0,"primary")},function(l,n){l(n,0,0,t["\u0275nov"](n,1).disabled||null,"NoopAnimations"===t["\u0275nov"](n,1)._animationMode)})}function $(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["color","primary"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.fetchPostReplies(!0)&&t),t},o.d,o.b)),t["\u0275did"](1,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Load New Replies "]))],function(l,n){l(n,1,0,"primary")},function(l,n){l(n,0,0,t["\u0275nov"](n,1).disabled||null,"NoopAnimations"===t["\u0275nov"](n,1)._animationMode)})}function Y(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","text-center margin-top-xs flex flex-around"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,J)),t["\u0275did"](2,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,$)),t["\u0275did"](4,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,"hasMore"===e.replyFetchStatus),l(n,4,0,e.isNewRepliesAvailable)},null)}function ll(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["type","button"]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,e){var i=!0,u=l.component;return"click"===n&&(i=!1!==t["\u0275nov"](l,1)._checkDisabled(e)&&i),"mouseenter"===n&&(i=!1!==t["\u0275nov"](l,1)._handleMouseEnter()&&i),"click"===n&&(i=0!=(u.editMode=!0)&&i),i},k.c,k.b)),t["\u0275did"](1,180224,[[2,4]],0,c.e,[t.ElementRef,M.d,d.h,[2,c.i]],null,null),(l()(),t["\u0275ted"](-1,0,["Edit Post"])),(l()(),t["\u0275eld"](3,0,null,null,2,"button",[["class","mat-menu-item"],["mat-menu-item",""],["type","button"]],[[1,"role",0],[2,"mat-menu-item-highlighted",null],[2,"mat-menu-item-submenu-trigger",null],[1,"tabindex",0],[1,"aria-disabled",0],[1,"disabled",0]],[[null,"click"],[null,"mouseenter"]],function(l,n,e){var i=!0,u=l.component;return"click"===n&&(i=!1!==t["\u0275nov"](l,4)._checkDisabled(e)&&i),"mouseenter"===n&&(i=!1!==t["\u0275nov"](l,4)._handleMouseEnter()&&i),"click"===n&&(i=!1!==u.deletePost(t["\u0275nov"](l.parent,58).value)&&i),i},k.c,k.b)),t["\u0275did"](4,180224,[[2,4]],0,c.e,[t.ElementRef,M.d,d.h,[2,c.i]],null,null),(l()(),t["\u0275ted"](-1,0,["Beitrag l\xf6schen"]))],null,function(l,n){l(n,0,0,t["\u0275nov"](n,1).role,t["\u0275nov"](n,1)._highlighted,t["\u0275nov"](n,1)._triggersSubmenu,t["\u0275nov"](n,1)._getTabIndex(),t["\u0275nov"](n,1).disabled.toString(),t["\u0275nov"](n,1).disabled||null),l(n,3,0,t["\u0275nov"](n,4).role,t["\u0275nov"](n,4)._highlighted,t["\u0275nov"](n,4)._triggersSubmenu,t["\u0275nov"](n,4)._getTabIndex(),t["\u0275nov"](n,4).disabled.toString(),t["\u0275nov"](n,4).disabled||null)})}function nl(l){return t["\u0275vid"](0,[t["\u0275pid"](0,M.e,[t.LOCALE_ID]),t["\u0275qud"](402653184,1,{discussionReplyEditor:0}),(l()(),t["\u0275eld"](2,0,null,null,48,"mat-card",[["class","margin-bottom-s mat-card"]],null,null,null,L.d,L.a)),t["\u0275did"](3,49152,null,0,z.a,[],null,null),(l()(),t["\u0275eld"](4,0,null,0,16,"div",[["class","flex flex-middle"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,1,"app-user-image",[["class","main-post-user-image"]],null,null,null,S.b,S.a)),t["\u0275did"](6,114688,null,0,T.a,[],{email:[0,"email"]},null),(l()(),t["\u0275eld"](7,0,null,null,13,"div",[["class","padding-left-s width-expand flex flex-between"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,1,"span",[["class","mat-primary-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](10,null,["",""])),(l()(),t["\u0275eld"](11,0,null,null,7,"div",[["class","mat-caption"]],null,null,null,null,null)),(l()(),t["\u0275ted"](12,null,[" "," "])),t["\u0275ppd"](13,1),(l()(),t["\u0275eld"](14,0,null,null,1,null,null,null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" at "])),(l()(),t["\u0275eld"](16,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["",""])),t["\u0275ppd"](18,2),(l()(),t["\u0275and"](16777216,null,null,1,null,K)),t["\u0275did"](20,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Q)),t["\u0275did"](22,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,U)),t["\u0275did"](24,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,G)),t["\u0275did"](26,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](27,0,null,0,17,"div",[["class","mat-app-background write-reply-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,1,"app-user-image",[["class","write-reply-user-image"]],null,null,null,S.b,S.a)),t["\u0275did"](29,114688,null,0,T.a,[],{email:[0,"email"]},null),(l()(),t["\u0275eld"](30,0,null,null,14,"div",[["class","padding-left-m width-expand"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,null,1,"div",[["class","write-reply-placeholder"],["role","button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,e){var t=!0,i=l.component;return"click"===n&&(t=0!=(i.replyPlaceholderToggler=!i.replyPlaceholderToggler)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,[" Write a reply "])),(l()(),t["\u0275eld"](33,0,null,null,11,"div",[["class","background-white"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275eld"](34,0,null,null,1,"app-editor-quill",[["class","write-reply-editor"]],null,[[null,"textData"]],function(l,n,e){var t=!0;return"textData"===n&&(t=!1!==l.component.onReplyTextChange(e)&&t),t},g.b,g.a)),t["\u0275did"](35,114688,[[1,4],["discussionReplyEditor",4]],0,b.a,[],{minLength:[0,"minLength"]},{textData:"textData"}),(l()(),t["\u0275eld"](36,0,null,null,8,"div",[["class","text-right padding-top-s mat-app-background"]],null,null,null,null,null)),(l()(),t["\u0275eld"](37,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.publishReply(t["\u0275nov"](l,59).value)&&i),i},o.d,o.b)),t["\u0275did"](38,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Reply "])),(l()(),t["\u0275eld"](40,0,null,null,2,"button",[["class","margin-left-xs"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0,i=l.component;return"click"===n&&(t=0!=(i.replyPlaceholderToggler=!i.replyPlaceholderToggler)&&t),t},o.d,o.b)),t["\u0275did"](41,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],null,null),(l()(),t["\u0275ted"](-1,0,[" Cancel "])),(l()(),t["\u0275and"](16777216,null,null,1,null,H)),t["\u0275did"](44,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](46,278528,null,0,M.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,X)),t["\u0275did"](48,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Y)),t["\u0275did"](50,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](51,0,null,null,6,"mat-menu",[],null,null,null,k.d,k.a)),t["\u0275prd"](6144,null,c.i,null,[c.c]),t["\u0275did"](53,1294336,[["editMenu",4]],2,c.c,[t.ElementRef,t.NgZone,c.a],null,null),t["\u0275qud"](603979776,2,{items:1}),t["\u0275qud"](335544320,3,{lazyContent:0}),(l()(),t["\u0275and"](16777216,null,0,1,null,ll)),t["\u0275did"](57,147456,[[3,4]],0,c.d,[t.TemplateRef,t.ComponentFactoryResolver,t.ApplicationRef,t.Injector,t.ViewContainerRef,M.d],null,null),(l()(),t["\u0275eld"](58,0,[["deleteFailMsg",1]],null,0,"input",[["i8n-value",""],["type","hidden"],["value","Something went wrong! Unable to delete."]],null,null,null,null,null)),(l()(),t["\u0275eld"](59,0,[["editFailMsg",1]],null,0,"input",[["i8n-value",""],["type","hidden"],["value","Something went wrong! Unable to post."]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,6,0,e.post.postCreator.emailId),l(n,20,0,e.userId===e.post.postCreator.postCreatorId),l(n,22,0,!e.editMode&&e.post.postContent.title.length),l(n,24,0,e.editMode),l(n,26,0,e.post.activity&&"Active"===e.post.status),l(n,29,0,e.userEmail),l(n,35,0,"10"),l(n,38,0,!e.isValidReply||e.isPostingReply,"primary"),l(n,44,0,e.isPostingReply),l(n,46,0,e.postReplies),l(n,48,0,"fetching"===e.replyFetchStatus),l(n,50,0,"hasMore"===e.replyFetchStatus||e.isNewRepliesAvailable),l(n,53,0)},function(l,n){var e=n.component;l(n,10,0,e.post.postCreator.name);var i=t["\u0275unv"](n,12,0,l(n,13,0,t["\u0275nov"](n,0),null==e.post?null:e.post.dtLastModified));l(n,12,0,i);var u=t["\u0275unv"](n,17,0,l(n,18,0,t["\u0275nov"](n,0),null==e.post?null:e.post.dtLastModified,"shortTime"));l(n,17,0,u),l(n,31,0,e.replyPlaceholderToggler),l(n,33,0,!e.replyPlaceholderToggler),l(n,37,0,t["\u0275nov"](n,38).disabled||null,"NoopAnimations"===t["\u0275nov"](n,38)._animationMode),l(n,40,0,t["\u0275nov"](n,41).disabled||null,"NoopAnimations"===t["\u0275nov"](n,41)._animationMode)})}e("6dxO"),e.d(n,"a",function(){return el}),e.d(n,"b",function(){return al});var el=t["\u0275crt"]({encapsulation:0,styles:[[".discussion[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:24px}.discussion[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]{padding:12px}.discussion[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.discussion[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   app-user-image[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-right:16px}.discussion[_ngcontent-%COMP%]   .discussion-header[_ngcontent-%COMP%]   .question-container[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%]{min-height:50px;padding:12px 12px 24px}.discussion[_ngcontent-%COMP%]   .discussion-body[_ngcontent-%COMP%]{margin-top:16px}.discussion[_ngcontent-%COMP%]   .discussion-body[_ngcontent-%COMP%]   .no-conversation[_ngcontent-%COMP%]{background:#f1f1f1;padding:12px;text-align:center}"]],data:{}});function tl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-spinner",[],null,null,null,i.b,i.a)),t["\u0275did"](2,49152,null,0,u.a,[],{spinSize:[0,"spinSize"],spinWidth:[1,"spinWidth"]},null)],function(l,n){l(n,2,0,"small","thin")},null)}function il(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-conversation"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" There aren't any conversations about this yet. "]))],null,null)}function ul(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"ws-discussion-post",[],null,[[null,"deleteSuccess"]],function(l,n,e){var t=!0;return"deleteSuccess"===n&&(t=!1!==l.component.onDeletePost(l.context.index)&&t),t},nl,j)),t["\u0275did"](1,114688,null,0,W,[I.e,C.c,R.a,x.a],{post:[0,"post"]},{deleteSuccess:"deleteSuccess"})],function(l,n){l(n,1,0,n.context.$implicit)},null)}function ol(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","margin-top-s margin-bottom-s"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"app-spinner",[],null,null,null,i.b,i.a)),t["\u0275did"](2,49152,null,0,u.a,[],{spinWidth:[0,"spinWidth"]},null)],function(l,n){l(n,2,0,"thin")},null)}function sl(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","text-center margin-top-s"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"button",[["class","width-1-1"],["mat-stroked-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.fetchDiscussion()&&t),t},o.d,o.b)),t["\u0275did"](2,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Show More Posts "]))],function(l,n){l(n,2,0,"fetching"===n.component.discussionFetchStatus,"primary")},function(l,n){l(n,1,0,t["\u0275nov"](n,2).disabled||null,"NoopAnimations"===t["\u0275nov"](n,2)._animationMode)})}function al(l){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{editorQuill:0}),(l()(),t["\u0275eld"](1,0,null,null,23,"div",[["class","discussion"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,13,"div",[["class","discussion-header mat-toolbar"]],[[8,"hidden",0]],null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,5,"div",[["class","question-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](4,0,null,null,1,"app-user-image",[],null,null,null,S.b,S.a)),t["\u0275did"](5,114688,null,0,T.a,[],{email:[0,"email"]},null),(l()(),t["\u0275eld"](6,0,null,null,2,"div",[["class","editor width-expand mat-app-background"]],null,null,null,null,null)),(l()(),t["\u0275eld"](7,0,null,null,1,"app-editor-quill",[],null,[[null,"textData"]],function(l,n,e){var t=!0;return"textData"===n&&(t=!1!==l.component.onTextChange(e)&&t),t},g.b,g.a)),t["\u0275did"](8,114688,[[1,4],["editorQuill",4]],0,b.a,[],{minLength:[0,"minLength"]},{textData:"textData"}),(l()(),t["\u0275eld"](9,0,null,null,5,"div",[["class","text-right margin-top-xs"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","button"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.publishConversation(t["\u0275nov"](l,26).value)&&i),i},o.d,o.b)),t["\u0275did"](11,180224,null,0,s.b,[t.ElementRef,a.a,d.h,[2,r.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t["\u0275ted"](-1,0,[" Post "])),(l()(),t["\u0275and"](16777216,null,null,1,null,tl)),t["\u0275did"](14,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](15,0,null,null,0,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,8,"div",[["class","discussion-body"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,il)),t["\u0275did"](18,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,ul)),t["\u0275did"](20,278528,null,0,M.n,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,ol)),t["\u0275did"](22,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,sl)),t["\u0275did"](24,16384,null,0,M.o,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](25,0,[["publish",1]],null,0,"input",[["type","hidden"],["value","Conversation published successfully"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,[["error",1]],null,0,"input",[["type","hidden"],["value","Unable to save. Please retry"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,5,0,e.userEmail),l(n,8,0,"20"),l(n,11,0,!e.isValidPost||e.isPostingDiscussion,"primary"),l(n,14,0,e.isPostingDiscussion),l(n,18,0,"none"===e.discussionFetchStatus),l(n,20,0,e.discussionResult.result),l(n,22,0,"fetching"===e.discussionFetchStatus),l(n,24,0,"hasMore"===e.discussionFetchStatus)},function(l,n){l(n,2,0,n.component.discussionForumInput.isLoggedInUserRestricted),l(n,10,0,t["\u0275nov"](n,11).disabled||null,"NoopAnimations"===t["\u0275nov"](n,11)._animationMode)})}}}]);