const store = new Vuex.Store({
    state: {
        Officers: [],
        UnseenInboxCount: 0,
        CurrentEmailId: null,
    },
    mutations: {
        setToOfficers(state, officers) {
            state.Officers = officers;
        },
        setCCOfficers(state, officers) {
            state.Officers = officers;
        },
        setUnseenInboxCount(state, count) {
            state.UnseenInboxCount=count
        },
        setCurrentEmailId(state, id) {
            state.CurrentEmailId = id
        },
    },
    getters: {
        // Getters just return the current state
        getToOfficers(state) {
            return state.Officers;
        },
        getCCOfficers(state) {
            return state.Officers;
        },
        getUnseenInboxCount(state) {
            return state.UnseenInboxCount;
        },
        getCurrentEmailId(state) {
            return state.CurrentEmailId;
        }

    },
    actions: {
        loadToOfficers({ state, commit }, { searchQuery, agencyId, officerIds }) {
            // AJAX call to fetch ToOfficers
            $.ajax({
                url: "?handler=OfficersAndEmailGroupForEmail",
                method: "POST",
                data: { input: { SearchQuery: searchQuery, AgencyId: agencyId, OfficerIds: officerIds } },
                success: function (response) {
                    commit('setToOfficers', response);
                    commit('setCCOfficers', response);
                }
            });
        },

    }
});
