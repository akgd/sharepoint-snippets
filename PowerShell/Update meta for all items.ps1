#Use this to update all items in a list or doc library

#Change the URL to the site you want
$web = Get-SPWeb http://site.com/subsite

#Change the list name to the one you want
$list = $web.lists["Resumes"]
$items = $list.Items 

#Change the SharePoint User ID to the one you want
$SPFieldUserValue = New-Object Microsoft.SharePoint.SPFieldUserValue ($SPWeb,2184)

#Change the date to the one you want
$dateToStore = Get-Date "10/02/2010"

foreach ($item in $items) 
{
#Sets the created by field
$item["Author"] = $SPFieldUserValue
$item["Created"] = $dateToStore
#Set the modified by values
$item["Editor"] = $SPFieldUserValue
$item["Modified"] = $dateToStore
$item.Update()
}
$web.Dispose()
