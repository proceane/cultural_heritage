export default {
  getList (fb, kdcd) {
    fb.database().ref('data/' + kdcd).on('value', (sn) => {
      console.log(sn.val())
    })
  },
  getDetail (fb, kdcd, ctcd, asno) {
    fb.database().ref('data/' + kdcd + '/' + ctcd + '/' + asno).on('value', (sn) => {
      console.log(sn.val())
    })
  }
}