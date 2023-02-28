// https://github.com/denoland/fresh/pull/1050
import { useEffect, useState } from "preact/hooks";

/**
 * Returns a cssrulelist of styleElement matching the selector.
 *
 */
function getCssrules(selector: string) {
  const elem = document.querySelector(selector) as HTMLStyleElement;
  return elem?.sheet?.cssRules;
}

/**
 * Returns the number of csstext duplicates that compare two cssrulelist.
 *
 */
function cmpCssRules(a: CSSRuleList, b: CSSRuleList) {
  const aCssTextArray = Array.from(a).map((elem: CSSRule) => {
    return elem.cssText;
  });
  const bCssTextArray = Array.from(b).map((elem: CSSRule) => {
    return elem.cssText;
  });
  const bCssTextSet = new Set(bCssTextArray);

  const duplicateRules = aCssTextArray.filter((value) => {
    return bCssTextSet.has(value);
  });

  console.group("Duplicated cssRules");
  console.log(duplicateRules);
  console.groupEnd();

  return duplicateRules.length;
}

export default function CheckDuplication() {
  const [cssRulesFRSHTWIND, setCssRulesFRSHTWIND] = useState<
    undefined | CSSRuleList
  >(undefined);
  const [cssRulesClaimed, setCssRulesClaimed] = useState<
    undefined | CSSRuleList
  >(undefined);

  // Init
  useEffect(() => {
    // get <style id="__FRSH_TWIND">
    setCssRulesFRSHTWIND(getCssrules("#__FRSH_TWIND"));

    // get <style data-twind="claimed">
    // see https://github.com/tw-in-js/twind/blob/main/packages/core/src/sheets.ts#L5-L16
    setCssRulesClaimed(
      getCssrules('[data-twind="claimed"]:not(#__FRSH_TWIND)')
    );
  });

  return (
    <div class="pl-2 my-2">
      <h2 class="text-3xl">Check duplicated cssrules</h2>
      <div class="pl-2 text-xl">
        {(() => {
          if (cssRulesFRSHTWIND != null && cssRulesClaimed != null) {
            return (
              <div>
                <p>{`Error : ${cmpCssRules(
                  cssRulesFRSHTWIND,
                  cssRulesClaimed
                )} cssrules are duplicated`}</p>
              </div>
            );
          } else if (cssRulesFRSHTWIND != null && cssRulesClaimed == null) {
            return <p>Ok : No dupicates</p>;
          } else {
            return <p>Error : Cssrules does not exist</p>;
          }
        })()}
      </div>
    </div>
  );
}
