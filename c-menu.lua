ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
	Citizen.Wait(5000)
end)

pos = {x = -1098.01, y = -841.74 , z =19.00}

function DrawMissionText(msg, time)
    ClearPrints()
    SetTextEntry_2('STRING')
    AddTextComponentString(msg)
    DrawSubtitleTimed(time, 1)
end

-- Display markers
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)
			local coords, letSleep = GetEntityCoords(PlayerPedId()), true
				if GetDistanceBetweenCoords(coords, -1098.01, -841.74, 18.1, true) < 100 then
					DrawMarker(25, -1098.01, -841.74, 18.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.5, 0, 0, 255, 100, false, true, 2, false, nil, nil, false)
					letSleep = false
				end
			if letSleep then
				Citizen.Wait(500)
			end
	end
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
 
        if Vdist2(GetEntityCoords(PlayerPedId(), false), -1098.01, -841.74, 18.18) < 1.2 then
            ESX.ShowHelpNotification("Appuyez sur ~INPUT_TALK~ pour déposer ~g~plainte")
        
            if IsControlJustPressed(1,38) then  
       
               Citizen.Wait(500) 
                DrawMissionText("~b~[Vous]~s~ Bonjour, Madame !", 1400)
                Citizen.Wait(1050)
            DrawMissionText("~g~[Nadine]~s~ Comment puis-je vous aider !", 2000)
            Citizen.Wait(1500)
            DrawMissionText("~g~[Vous]~s~ Je veux déposer plainte s'il vous plait", 2100)
            Citizen.Wait(1500)
            DrawMissionText("~b~[Nadine]~s~ D'accord, avec plaisir. Veuillez remplir ce formulaire", 4000)
            Citizen.Wait(55)
            
             
                SetDisplayPlainte(true)
                Citizen.Wait(300000)  

            end
        end
    end
end) 



local display = false


RegisterCommand('nui', function()
    SetDisplayPlainte(true)
end)

--very important cb 
RegisterNUICallback("exitplainte", function(data)
    SetDisplayPlainte(false)
end)

-- this cb is used as the main route to transfer data back 
-- and also where we hanld the data sent from js
RegisterNUICallback("postplainte", function(data)
    TriggerServerEvent('sinaps-menu:postApplication', data)
    SetDisplayPlainte(false)
    ESX.ShowNotification("Votre Plainte a été bien envoyé !")
end)

RegisterNUICallback("errorplainte", function(data)
    ESX.ShowNotification(data.error)
    SetDisplayPlainte(false)
end)

function SetDisplayPlainte(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "plainteui",
        status = bool,
    })
end

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)

function chat(str, color)
    TriggerEvent(
        'chat:addMessage',
        {
            color = color,
            multiline = true,
            args = {str}
        }
    )
end