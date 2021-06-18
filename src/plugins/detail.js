export default function getDetail (fb, kdcd, ctcd, asno) {
    var result
    fb.database().ref('data/' + kdcd + '/' + ctcd + '/' + asno).on('value', (sn) => {
        result = sn.val()
    })
    return result
}