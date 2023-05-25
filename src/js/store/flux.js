const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLBASE: "https://assets.breatheco.de/apis/fake/contact",
      contacts: [],
    },
    actions: {
      getContacts: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.URLBASE}/agenda/daibert_agenda`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              contacts: data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },

      addContacts: async (data) => {
        let store = getStore();
        let actions = getActions();
        try {
          let response = await fetch(`${store.URLBASE}/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            actions.getContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      deleteContact: async (id) => {
        let store = getStore();
        let actions = getActions();
        try {
          let response = await fetch(`${store.URLBASE}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            actions.getContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      updateContact: async (data, id) => {
        let store = getStore();
        let actions = getActions();
        try {
          let response = await fetch(`${store.URLBASE}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            actions.getContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
