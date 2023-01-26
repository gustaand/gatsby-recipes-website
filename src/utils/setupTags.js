const setupTags = recipes =>{
  const allTags = {}

  recipes.forEach(recipe => {

    recipe.content.tags.forEach( tag => {
      if(allTags[tag]){
        allTags[tag] = allTags[tag] + 1
      } 
      else {
        allTags[tag] = 1
      }
    })

  });
  const newTags = Object.entries(allTags).sort((a, b)=>{
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags;

// recipes is an array, and tags is an array inside the recipes array, 
// so we iterate recipes and then inside recipes we iterate tags, so we print the recipes tags.