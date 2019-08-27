import { helper } from "@ember/component/helper";

export function firstLetter(params /*, hash*/) {
  return params[0][0];
}

export default helper(firstLetter);
