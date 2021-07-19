import { auth, provider, storage } from "../firebase";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";
import db from "../firebase";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  user: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    console.log(payload);
    dispatch(setLoading(true));
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          // console.log(payload.image.lastModifiedDate);

          const hy = payload.image.lastModifiedDate;

          const myDate = new Date(hy);
          const myEpoch = myDate.getTime();
          console.log(myEpoch);
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.image.lastModifiedDate,
              timestamp: myEpoch,
              image: payload.user.photoURL,
            },
            video: payload.video,
            shareImg: downloadURL,
            comments: 0,
            description: payload.description,
          });

          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {

      // const hy = payload.image.lastModifiedDate;
      // const myDate = new Date(hy);
      // const myEpoch = myDate.getTime() / 1000;
      // console.log(myEpoch);

      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          // date: payload.image.lastModifiedDate,
          // timestamp: myEpoch,
          image: payload.user.photoURL,
        },
        video: payload.video,
        shareImg: "",
        comments: 0,
        description: payload.description,
      });
      console.log(payload.image.lastModifiedDate);

      dispatch(setLoading(false));

    }
  };
};

export const getArticlesAPI = () => {
  return (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.timestamp", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        console.log(payload);
        dispatch(getArticles(payload));
      });
  };
};
