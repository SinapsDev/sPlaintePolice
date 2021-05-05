function postApp(title, subjectTitle, date, fname, sname, phone, message, subject, webhook)
	local embeds = {
	{
		["type"] = "rich",
		["title"] = title ,
		["fields"] =  {
						{
						["name"]= "Full name:",
						["value"]= fname .. sname,
						},
						{
							["name"]= "Phone Number:",
							["value"]= phone,
                        },
                        {
							["name"]= "Date:",
							["value"]= date,
						},
						{
							["name"]= subjectTitle,
							["value"]= subject,
						},
						{
							["name"]= "Message",
							["value"]= message,
						},
				},
		["color"] = 3447003,
		["footer"] =  {
					["text"]= os.date("%A %x"),
					},
	}}
	PerformHttpRequest(webhook, function(err, text, headers) end, 'POST', json.encode({ embeds = embeds}), { ['Content-Type'] = 'application/json' })
end		

RegisterServerEvent("sinaps-menu:postApplication")
AddEventHandler("sinaps-menu:postApplication", function(dataTemp)

    local data = dataTemp
        Citizen.Wait(0)
        postApp("Nouvelle Plainte", "Sujet de Plainte", data.date, data.fname, data.sname, data.phone, data.message, data.subject, Config.webhook)
end)