module.exports = async function deleteDublicateJson(content){
    async function uniqResult(data, key) {
    return[
      ...new Map(
          data.map(x => [key(x), x])
      ).values()
    ]
    }

    const filteredResult = await uniqResult(content, it => it.username)
    console.log("Json почищен от дублей")
    return filteredResult
}
