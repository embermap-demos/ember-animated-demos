import { helper } from "@ember/component/helper";
import _marked from "marked";
import { htmlSafe } from "@ember/string";

export function marked(params /*, hash*/) {
  return htmlSafe(`<div class='markdown'>${_marked(params[0])}</div>`);
}

export default helper(marked);
