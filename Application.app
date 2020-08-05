{
	"_Name": "mdk_test",
	"Version": "/mdk_test/Globals/AppDefinition_Version.global",
	"MainPage": "/mdk_test/Pages/Main.page",
	"OnLaunch": [
		"/mdk_test/Actions/Service/InitializeOffline.action"
	],
	"OnWillUpdate": "/mdk_test/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/mdk_test/Actions/Service/InitializeOffline.action",
	"Styles": "/mdk_test/Styles/Styles.less",
	"Localization": "/mdk_test/i18n/i18n.properties"
}