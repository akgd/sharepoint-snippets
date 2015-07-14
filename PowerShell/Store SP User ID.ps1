# Gets Created By user and stores their unique SP ID in a new column

$web = Get-SPWeb http://site.com/subsite
$list = $web.lists["Staff Results"]
$items = $list.Items 
foreach ($item in $items) 
{
     $separator=”;”
     $text = $item["Created By"]
     $name = $text.split($separator)
     $SPUserID = $name[0]
      $item["SharePoint User ID"] = $SPUserID
      $item.SystemUpdate();
}
$web.Dispose()
