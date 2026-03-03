export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.C1Qv0qQj.js",app:"_app/immutable/entry/app.DNNLm5qg.js",imports:["_app/immutable/entry/start.C1Qv0qQj.js","_app/immutable/chunks/Dfkvhwmb.js","_app/immutable/chunks/mQTrEUch.js","_app/immutable/chunks/bkYrbMlf.js","_app/immutable/entry/app.DNNLm5qg.js","_app/immutable/chunks/mQTrEUch.js","_app/immutable/chunks/R353CW9e.js","_app/immutable/chunks/D7wKw-Lh.js","_app/immutable/chunks/bkYrbMlf.js","_app/immutable/chunks/Dw0VDt_Q.js","_app/immutable/chunks/G30fl7Mi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
