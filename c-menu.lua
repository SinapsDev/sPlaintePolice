ESX = nil
local display = false

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
	Citizen.Wait(5000)
end)

function DrawMissionText(msg, time)
    ClearPrints()
    SetTextEntry_2('STRING')
    AddTextComponentString(msg)
    DrawSubtitleTimed(time, 1)
end

Citizen.CreateThread(function()
    local interval = 1
    while true do
        Citizen.Wait(interval)
 
        if Vdist2(GetEntityCoords(PlayerPedId()), Config.Pos.x, Config.Pos.y, Config.Pos.z) < 5 then
            DrawMarker(25, Config.Pos.x, Config.Pos.y, Config.Pos.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.5, 0, 0, 255, 100, false, true, 2, false, nil, nil, false)
            ESX.ShowHelpNotification("Appuyez sur ~INPUT_TALK~ pour déposer ~g~plainte")
            interval = 1
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
                disableControl()
                Citizen.Wait(300000)  

            end
        else  interval = 700 end
    end
end) 


RegisterCommand('nui', function()
    SetDisplayPlainte(true)
end)


RegisterNUICallback("exitplainte", function(data)
    SetDisplayPlainte(false)
end)

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

function disableControl()
    Citizen.CreateThread(function()
        while display do
            Wait(1)
            DisableControlAction(0, 1, display) -- LookLeftRight
            DisableControlAction(0, 2, display) -- LookUpDown
            DisableControlAction(0, 142, display) -- MeleeAttackAlternate
            DisableControlAction(0, 18, display) -- Enter
            DisableControlAction(0, 322, display) -- ESC
            DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
        end
    end)
end