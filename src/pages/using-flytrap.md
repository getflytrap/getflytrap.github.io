---
id: using-flytrap
title: Using Flytrap
sidebar_label: using-flytrap
---

# How to Use Flytrap

## Admin Console

1. **Log in to the Admin Console:** Visit the Flytrap client dashboard URL in the browser (or use your custom domain if you've configured DNS). Log in
   using the default admin email and password provided in the Terraform command line outputs. Select Change Password to update your default admin email and password.

<img src="/screenshots/loginPage.png" alt="Costs of Errors" className="max-width" />

2. **Create Projects:** Click on Create Project. Give your project a name and select from among the available SDKs (React,
   Vanilla JS, Express, Flask).

<img src="/screenshots/projectSetup.png" alt="Costs of Errors" className="max-width" />

3. **Follow SDK Setup Instructions:** The admin console provides detailed installation instructions for each SDK.
   - The React and Express SDKs are available as npm packages.
   - The Flask SDK is available as a PyPi package.
   - The Vanilla JS SDK is installed by adding a `<script>` tag to your existing application.

You'll be provided with a code snippet for initializing the Flytrap SDK in your application. You can also choose to manually add Flytrap's `captureException` method to your application as needed to catch data about handled errors (e.g., inside a try/catch block).

<img src="/screenshots/reactSDKInstructions.png" alt="Costs of Errors" className="max-width" />

4. **Add Users to Projects:** Once a Flytrap SDK is initialized in your application, you can add developers to each project. Select Create New User in the admin console. You’ll be prompted to add users, who can then be assigned to specific projects. Users only have access to error data for the
   projects they are assigned to.

<img src="/screenshots/adminConsole.png" alt="Costs of Errors" className="max-width" />

5. **Test Flytrap Setup:** The Flytrap SDK setup instructions include a code snippet for generating a sample error. You can add this to your application to test that the Flytrap infrastructure and SDK installation have been set up correctly.

---

## Developer Dashboard

1. **Access the Dashboard:** After being assigned to a project, developers can log in to the Flytrap dashboard using their credentials. The dashboard serves as the central hub for monitoring and resolving errors in near real-time.

<img src="/screenshots/projectsDashboard.png" alt="Costs of Errors" className="max-width" />

2. **View and Filter Errors:** Developers can view all project errors on the Issues page and use the filtering tools to focus on:

   - Handled versus unhandled errors
   - Resolved versus unresolved errors
   - Time periods

   This helps prioritize fixes for issues with the greatest user impact or urgency.

<img src="/screenshots/issuesPage.png" alt="Costs of Errors" className="max-width" />

3. **View Error Data:** The dashboard provides a near real-time view of all captured errors, sorted by project. Error data includes:

   - **Error type**
   - **Stack trace**
   - **Affected users**
   - **Timestamp**

<img src="/screenshots/errorPage.png" alt="Costs of Errors" className="max-width" />

When stack trace data is available, users can interact with it by clicking on each line in the stack trace. Clicking expands
the corresponding section to reveal the error line with red syntax highlighting, providing quick visual context for the issue.

<img src="/screenshots/expressStackTrace.png" alt="Costs of Errors" className="max-width" />

4. **Resolve Errors:** Errors can be:

   - Marked as handled (indicating that the error has been addressed).
   - Deleted (if the error no longer needs attention).

   The interface is designed to streamline error resolution and ensure a smooth workflow.

5. **Monitor User Impact:** Flytrap tracks the number of users affected by each error. This data provides actionable insights for prioritizing fixes, allowing developers to focus on high-impact issues first.

6. **Iterate and Improve:** Use Flytrap to continuously monitor your applications for new issues and ensure errors are resolved promptly. The dashboard’s intuitive interface minimizes distractions, allowing teams to focus on improving the user experience.
