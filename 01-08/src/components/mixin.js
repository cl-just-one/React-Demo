const MixinLog = {
  componentWillMount() {
    console.log("Mixin - componentWillMount")
  },
  log() {
    console.log('====================================');
    console.log("abcdefg......");
    console.log('====================================');
  }
}

export default MixinLog