import { userEvent, within } from "@storybook/testing-library";

import { MyComponent } from "./MyComponent";

export default {
  component: MyComponent,
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter email and password", async () => {
      await userEvent.type(canvas.getByTestId("email"), "hi@example.com");
      await userEvent.type(canvas.getByTestId("password"), "supersecret");
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
  },
};
