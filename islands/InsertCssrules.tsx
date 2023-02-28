// https://github.com/denoland/fresh/pull/1050
import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

/**
 * Returns a number of cssrules set by twind.
 *
 */
function getNumCssrules(): number | undefined {
  const elem = document.getElementById("__FRSH_TWIND") as HTMLStyleElement;
  return elem.sheet?.cssRules.length;
}

export default function InsertCssrules() {
  const [numDefCssRules, setNumDefCssRules] = useState<number | undefined>(
    undefined
  );
  const [numCssRules, setNumCssRules] = useState<number | undefined>(undefined);
  const [insertedStyles, setInsertedStyles] = useState("");

  // Init numDefCssRules
  useEffect(() => {
    setNumDefCssRules(getNumCssrules());
  }, []);

  // Init and Update numCssRules
  useEffect(() => {
    setNumCssRules(getNumCssrules());
  }, [insertedStyles]);

  return (
    <div class="pl-2 my-2">
      <h2 class="text-3xl">Insert cssrule in islands</h2>
      <div class="pl-2">
        <div class="flex">
          <p>Default Number of __FRSH_TWIND CssRules : </p>
          <p id="defaultNumCssRules" class={`text-xl pl-1`}>
            {numDefCssRules ? numDefCssRules : "Error : Cannot get cssrules"}
          </p>
        </div>
        <div class="flex">
          <p>Current Number of __FRSH_TWIND CssRules :</p>
          <p id="currentNumCssRules" class={`text-xl pl-1 ${insertedStyles}`}>
            {numCssRules ? numCssRules : "Error : Cannot get cssrules"}
          </p>
        </div>

        <p class="text-xl">
          {(() => {
            if (insertedStyles === "") {
              return "Plese click button";
            } else if (numDefCssRules === numCssRules) {
              return 'Error: A cssrule has been inserted into a style sheet other than <style id="__FRSH_TWIND">';
            } else {
              return <span class={insertedStyles}>Success!</span>;
            }
          })()}
        </p>
        <Button
          onClick={() => {
            setInsertedStyles("text-green-600");
          }}
          disabled={insertedStyles === "" ? false : true}
        >
          Add `text-green-600` to Cureent Number Class
        </Button>
      </div>
    </div>
  );
}
