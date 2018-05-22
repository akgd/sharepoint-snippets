$Url = "https://YOURORG.sharepoint.com/"

Get-SPOSite -Identity $Url -Detailed | select DenyAddAndCustomizePages
