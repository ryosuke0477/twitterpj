export const state = () => ({
  username: [],
  datas: [],
  login: "",
  show: "",
  postComment:"初期値"
});


export const mutations = {
  add(state, { name, mail }) {
    if (state.username.findIndex(({email}) => email === mail) == -1){
      state.username.push({ name: name, email: mail });
    }
  },
  login(state, mail) {
    var index = state.username.findIndex(({email}) => email === mail);
    state.login = state.username[index];
      // state.login = email;
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
  }
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
  async getCount(context,id) {
      await this.$axios.put("http://127.0.0.1:8000/api/post/" + id);
      context.dispatch('getPost')
  },
  async postDel(context,id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/post/" + id);
      context.dispatch('getPost')
  },
  async showCount(context,id) {
      await this.$axios.put("http://127.0.0.1:8000/api/post/" + id);
      context.dispatch('postShow',id)
  },
  async showDel(context,id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/post/" + id);
    this.$router.replace('/home')
     context.dispatch('getPost')
  },
   async postShow(context,id) {
      const resShow = await this.$axios.get(
        "http://127.0.0.1:8000/api/post/"+ id
    );
     context.commit("setShow", resShow.data);
  },
   async postComment(context,comment) {
     const commentdata = {
      post_id:context.state.show.data[0].id,
      commentname:context.state.login.name,
      comment: comment,
      // post_id:context.state.show.data[0].id,
      // commentname:"どうでしょうか",
      // comment: "お願いします",
    };
     await this.$axios.post("http://127.0.0.1:8000/api/comment/", commentdata);
      context.dispatch('postShow',context.state.show.data[0].id)
  },
}