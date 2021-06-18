export default {
  getList (fb, kdcd) {
    fb.database().ref('data/' + kdcd).on('value', (sn) => {
      console.log(sn.val())
    })
  }
}