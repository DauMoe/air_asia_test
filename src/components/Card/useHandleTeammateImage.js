export const useHandleTeammateImage = (listTeammateImages) => {
  if (!Array.isArray(listTeammateImages)) {
    throw new Error("Input must be an string Array");
  }
  let threeFirstTeammate = [];
  for (const image of listTeammateImages) {
    if (threeFirstTeammate.length < 3) {
      threeFirstTeammate.push(image);
    } else {
      break;
    }
  }
  
  return {
    threeFirstTeammate,
    remain: listTeammateImages.length - threeFirstTeammate.length
  }

}