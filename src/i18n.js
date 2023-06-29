import i18next from "i18next";
import { initReactI18next } from "react-i18next"; 
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
    debug: true,
    supportedLngs: ['en', 'it'],
	fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                selectALanguage: "Select a language",
                description1: "The best thing for the climate is to keep flights to a minimum and to choose less carbon exhaustive options to get around.",
                description2: "However, when staying on the ground is not an option, you can calculate the emissions from travelling to be aware of the amount of CO2 it produces.",
                description3: "You can enter 4 types of parameters: departure, destination (filtered by city or country), number of travel mates, and selected class, to obtain an accurate final calculation.",
                departure: "Departure",
                arrival: "Arrival",
                placeholder: "Select a city or a country",
                placeholderPass: "Number of your travel mates",
                passengers: "Passengers",
                class: "Class",
                choose: "Choose one option...",
                showFootprint: "Show Footprint",
                departureAirport: "Departure Airport",
                arrivalAirport: "Arrival Airport",
                totalFootprint: "Total Footprint",
                footprintPerPassenger: "Footprint per Passenger",
                summary: "Summary",
                newSearch: "New Search",
                of: "of",
                WebSite: "Web Site",
                how: "How does calculation works?",
            },
        },
        it: {
            translation: {
                selectALanguage: "Seleziona una lingua",
                description1: "La cosa migliore per il clima è ridurre al minimo i voli e scegliere trasporti meno inquinanti in termini di emissioni di carbonio.",
                description2: "Comunque, se stare con i piedi per terra non è un'opzione, puoi calcolare le emissioni di ogni viaggio aereo per essere consapevole della quantità di CO2 prodotta.",
                description3: "Puoi inserire 4 tipi di parametri: partenza e destinazione (per città o per stato), numero di compagni di viaggio e classe selezionata per avere un calcolo finale accurato.",
                departure: "Partenza",
                arrival: "Arrivo",
                placeholder: "Seleziona per città o stato",
                placeholderPass: "Numero dei tuoi compagni di viaggio",
                passengers: "Passeggeri",
                class: "Classe",
                choose: "Scegli un'opzione...",
                showFootprint: "Calcola Footprint",
                totalFootprint: "Footprint totale",
                footprintPerPassenger: "Footprint per passeggero",
                departureAirport: "Aeroporto di partenza",
                arrivalAirport: "Aeroporto di arrivo",
                summary: "Riassunto",
                newSearch: "Nuova Ricerca",
                of: "di",
                WebSite: "Sito Web",
                how: "Come funziona il calcolo?",
            },
        },
    }
})
