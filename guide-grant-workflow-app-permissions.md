# Grant Workflow App Permissions

Try the following to resolve errors when making HTTP requests across SharePoint site collections. The full guide from Microsoft can be found [here](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/create-a-workflow-with-elevated-permissions-by-using-the-sharepoint-workflo).

1. Go to https://your/site/_layouts/15/ManageFeatures.aspx and activate 'Workflows can use app permissions'.
2. Go to https://your/site/_layouts/15/appprincipals.aspx?Scope=Web
3. Copy the ID between the '|' and '@'.
4. Go to https://your/othersite/_layouts/15/appinv.aspx
5. Paste the ID into App Id field and click Lookup to resolve.
6. Paste the following into the XML field:
```
<AppPermissionRequests>
  <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />
  <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="Read" />
</AppPermissionRequests>
```