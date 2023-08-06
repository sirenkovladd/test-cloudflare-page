import { createMemo, createSignal, For, Show } from "solid-js";
import { A, useLocation, useRouteData } from "solid-start";
import {
  createServerAction$,
  createServerData$,
  createServerMultiAction$,
  redirect,
} from "solid-start/server";
import { CompleteIcon, IncompleteIcon } from "~/components/icons";
import db from "~/db";
import { Todo } from "~/types";

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      setFocus: true;
    }
  }
}

export const routeData = () =>
  createServerData$(db.getTodos, { initialValue: [] });

const TodoApp = () => {
  let inputRef!: HTMLInputElement;
  return (
    <section class="todoapp">
      111
      222
      333
      <A href="/">To main</A>
    </section>
  );
};

export default TodoApp;
