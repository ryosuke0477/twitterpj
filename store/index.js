export const state = () => ({
  // username: [],
  saveid:0,
  // test:2,
  addIf:[],
  datas: [],
  login: "",
  show: "",
  postComment:"初期値"
});

export const getters = {
  IfAdd (state) {
      if (state.addIf == 0) {
        return true;
    }
    return false;
  },
  IfCut(state) {
      if (state.addIf == 1) {
        return true;
    }
    return false;
    },
}


export const mutations = {
  // add(state, { name, mail }) {
  //   if (state.username.findIndex(({email}) => email === mail) == -1){
  //     state.username.push({ name: name, email: mail });
  //   }
  // },
  // login(state, mail) {
  //   var index = state.username.findIndex(({email}) => email === mail);
  //   state.login = state.username[index];
  // },
  getName(state, username) {
    state.login = username
  },
  setUsers(state, resData) {
    state.datas = resData
  },
  setShow(state, resShow) {
    state.show = resShow;
    $nuxt.$router.push('/comment')
  },
  setComment(state, resComment) {
    state.postComment = resComment;
  },
  setIf(state, resIf) {
    state.addIf = resIf;
  },
  gettest(state, param) {
    state.test = param;
  },
  save(state, id) {
    state.saveid = id;
  }
  // add(state) {
  //   state.IfAdd = 1
  // },
  // cut(state) {
  //   state.IfAdd = 0
  // }
}

export const actions = {
   async getPost(context) {
      const resData = await this.$axios.get(
        "http://127.0.0.1:8000/api/post/"
    );
    context.commit("setUsers", resData.data.data)
    this.$router.replace('/home')
  },
   async getComment(context) {
      const resComment = await this.$axios.get(
        "http://127.0.0.1:8000/api/comment/"
    );
    context.commit("setComment",resComment.data.data)
  },
  async insertPost(context, { postname, content }) {
    const param = {
      postname: postname,
      content: content,
      count:0,
    };
      await this.$axios.post("http://127.0.0.1:8000/api/post/",param);
      context.dispatch('getPost')
  },
  async getCount(context, id) {
    // context.commit('add');
    const resIf = await this.$axios.get(
        "http://127.0.0.1:8000/api/like/"
    );
    const x = 0;
    resIf.data.data.some(function (element) {
      if(element.likename == context.state.login){
        if (element.post_id == id) {
          if (element.add == 0) {
            context.dispatch('PutCount', { count: 1, id: element.id });
            context.commit("save",id);
            x = 1;
          } else {
            context.dispatch('PutCount', { count: 0, id: element.id });
            context.commit("save",id);
            x = 1;
          }
        }
      }
    });
    if(x==0){
      context.dispatch('PostCount', { count: 1, id: id })
      }
  },
  async PostCount(context, { count, id }) {
    const param = {
      likename: context.state.login,
      post_id: id,
      add:count
      };
    this.$axios.post("http://127.0.0.1:8000/api/like/", param);
    context.dispatch('CountPost',id)
  },

  async PutCount(context, { count, id }) {
    const param = {
      add:count
      };
      await this.$axios.put("http://127.0.0.1:8000/api/like/" + id, param);
      context.dispatch('CountPost',context.state.saveid)
  },

    async CountPost(context,id) {
      await this.$axios.put("http://127.0.0.1:8000/api/post/" + id);
      context.dispatch('getPost')
  },
  // async getIf(context) {
  //     const resIf = await this.$axios.get(
  //       "http://127.0.0.1:8000/api/like/"
  //   );
  //     context.commit("setIf", resIf.data.data)
  //     this.$router.replace('/home')
  // },
  async postDel(context,id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/post/" + id);
      context.dispatch('getPost')
  },
  // async showCount(context,id) {
  //     await this.$axios.put("http://127.0.0.1:8000/api/post/" + id);
  //     context.dispatch('postShow',id)
  // },

    async showCount(context,id) {
      const resIf = await this.$axios.get(
        "http://127.0.0.1:8000/api/like/"
    );
    const x = 0;
    resIf.data.data.some(function (element) {
      if(element.likename == context.state.login){
        if (element.post_id == id) {
          if (element.add == 0) {
            context.dispatch('ShowPutCount', { count: 1, id: element.id });
            context.commit("save",id);
            x = 1;
          } else {
            context.dispatch('ShowPutCount', { count: 0, id: element.id });
            context.commit("save",id);
            x = 1;
          }
        }
      }
    });
    if(x==0){
      context.dispatch('ShowPostCount', { count: 1, id: id })
      }
  },
async ShowPostCount(context, { count, id }) {
    const param = {
      likename: context.state.login,
      post_id: id,
      add:count
      };
    this.$axios.post("http://127.0.0.1:8000/api/like/", param);
    context.dispatch('postShow',id)
  },

  async ShowPutCount(context, { count, id }) {
    const param = {
      add:count
      };
      await this.$axios.put("http://127.0.0.1:8000/api/like/" + id, param);
      context.dispatch('postShow',context.state.saveid)
  },











  async showDel(context,id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/post/" + id);
    this.$router.replace('/home')
     context.dispatch('getPost')
  },
  async postShow(context, id) {
      await this.$axios.put("http://127.0.0.1:8000/api/post/" + id);
      const resShow = await this.$axios.get(
        "http://127.0.0.1:8000/api/post/"+ id
    );
     context.commit("setShow", resShow.data);
  },
   async postComment(context,comment) {
     const commentdata = {
      post_id:context.state.show.data[0].id,
      commentname:context.state.login,
      comment: comment,
      // post_id:context.state.show.data[0].id,
      // commentname:"どうでしょうか",
      // comment: "お願いします",
    };
     await this.$axios.post("http://127.0.0.1:8000/api/comment/", commentdata);
      context.dispatch('postShow',context.state.show.data[0].id)
  },
}