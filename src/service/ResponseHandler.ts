import { production } from "../stores";
import { navigate } from "svelte-routing"

export const createdRedirect = (location: string) => {
  console.log("redirecting to: "+location)
  if(production) {
    navigate(location);
  } else {
    navigate(location.replace("8080", "5000"));
  }
}