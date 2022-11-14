!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jsDatastructure={})}(this,function(t){"use strict";class s{constructor(t,e){this.element=t,this.next=e}element;next}class h extends s{constructor(t,e,i){super(t,e),this.prev=i}prev}const e=(t,e)=>t===e;class i{constructor(t=e){this.equalsFn=t}equalsFn=e;count=0;head;push(e){e=new s(e);if(this.count+=1,this.head){let t=this.head;for(;t.next;)t=t.next;t.next=e}else this.head=e}insert(t,e){var i;return!(e<0||e>this.count)&&(i=new s(t),e!==this.count&&(this.count+=1),e===this.count?this.push(t):0===e?(i.next=this.head,this.head=i):(t=this.getElementAt(e-1),i.next=t.next,t.next=i),!0)}remove(t){t=this.indexOf(t);return this.removeAt(t)}removeAt(e){if(!(e<0||e>=this.count)){let t=this.head;return 0===e?this.head=t?.next:(e=this.getElementAt(e-1),t=e.next,e.next=t.next),--this.count,t?.element}}indexOf(t){let e=this.head,i=0;for(;e;){if(this.equalsFn(e.element,t))return i;i++,e=e.next}return-1}getHead(){return this.head}getElementAt(i){if(!(i<0||i>=this.count)){let t=this.head,e=0;for(;e<i;)e+=1,t=t.next;return t}}size(){return this.count}isEmpty(){return 0===this.count}clear(){this.head=void 0,this.count=0}toString(){if(!this.head)return"";let t=this.head,e=""+this.head.element;for(;t.next;)e+=","+t.next.element,t=t.next;return e}}t.Deque=class{count=0;index=0;list={};addFront(t){if(this.isEmpty())this.addBack(t);else if(0<this.index)--this.index,this.list[this.index]=t;else{for(let t=this.count;0<t;t--)this.list[t]=this.list[t-1];this.count+=1,this.list[0]=t}}addBack(t){this.list[this.count]=t,this.count+=1}removeFront(){var t;if(!this.isEmpty())return t=this.list[this.index],delete this.list[this.index],this.index+=1,t}removeBack(){var t;if(!this.isEmpty())return--this.count,t=this.list[this.count],delete this.list[this.count],t}peekFront(){if(!this.isEmpty())return this.list[this.index]}peekBack(){if(!this.isEmpty())return this.list[this.count-1]}size(){return this.count-this.index}isEmpty(){return 0===this.size()}clear(){this.list={},this.count=0,this.index=0}toString(){if(this.isEmpty())return"";let e=""+this.list[this.index];for(let t=this.index+1;t<this.count;t++)e=e+","+this.list[t];return e}},t.DoublyLinkedList=class extends i{constructor(t=e){super(t)}tail;push(t){t=new h(t);this.count+=1,this.head&&this.tail?(this.tail.next=t).prev=this.tail:this.head=t,this.tail=t}insert(t,e){var i;return!(e<0||e>this.count)&&(i=new h(t),e!==this.count&&(this.count+=1),e===this.count?this.push(t):0===e?this.head?((this.head.prev=i).next=this.head,this.head=i):(this.head=i,this.tail=i):(e=(t=this.getElementAt(e-1)).next,i.next=e,(t.next=i).prev=t,e.prev=i),!0)}removeAt(e){if(!(e<0||e>=this.count)){let t=this.head;return 0===e?(this.head=t.next,this.head?this.head.prev=void 0:this.tail=void 0):(e=this.getElementAt(e-1),(t=e.next).next&&(t.next.prev=e),e.next=t.next),--this.count,t.element}}getTail(){return this.tail}clear(){super.clear(),this.tail=void 0}},t.LinkedList=i,t.Queue=class{count=0;index=0;list={};enqueue(...t){t.forEach(t=>{this.list[this.count]=t,this.count+=1})}dequeue(){var t;if(!this.isEmpty())return t=this.list[this.index],delete this.list[this.index],this.index+=1,t}peek(){if(!this.isEmpty())return this.list[this.index]}size(){return this.count-this.index}isEmpty(){return 0===this.size()}clear(){this.list={},this.count=0,this.index=0}toString(){if(this.isEmpty())return"";let e=""+this.list[this.index];for(let t=this.index+1;t<this.count;t++)e=e+","+this.list[t];return e}},t.Stack=class{list=[];push(...t){t.forEach(t=>{this.list.push(t)})}pop(){return this.list.pop()}peek(){return this.list[this.size()-1]}size(){return this.list.length}isEmpty(){return 0===this.size()}clear(){this.list=[]}toString(){return this.list.toString()}},Object.defineProperty(t,"__esModule",{value:!0})});