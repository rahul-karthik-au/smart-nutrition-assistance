/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  email?: string | null,
  userId?: string | null,
  firstname: string,
  lastname?: string | null,
  age: number,
  gender: string,
  activityLevel?: string | null,
  height: number,
  weight: number,
  fitnessGoals?: string | null,
  targetCalorie?: number | null,
  customeGoals?: string | null,
  dietaryPreference?: Array< string | null > | null,
  foodAllergies?: Array< string | null > | null,
  additionalNotes?: string | null,
};

export type ModelUserProfileConditionInput = {
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  activityLevel?: ModelStringInput | null,
  height?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  fitnessGoals?: ModelStringInput | null,
  targetCalorie?: ModelIntInput | null,
  customeGoals?: ModelStringInput | null,
  dietaryPreference?: ModelStringInput | null,
  foodAllergies?: ModelStringInput | null,
  additionalNotes?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  email?: string | null,
  userId?: string | null,
  firstname: string,
  lastname?: string | null,
  age: number,
  gender: string,
  activityLevel?: string | null,
  height: number,
  weight: number,
  fitnessGoals?: string | null,
  targetCalorie?: number | null,
  customeGoals?: string | null,
  dietaryPreference?: Array< string | null > | null,
  foodAllergies?: Array< string | null > | null,
  additionalNotes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserProfileInput = {
  id: string,
  email?: string | null,
  userId?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  age?: number | null,
  gender?: string | null,
  activityLevel?: string | null,
  height?: number | null,
  weight?: number | null,
  fitnessGoals?: string | null,
  targetCalorie?: number | null,
  customeGoals?: string | null,
  dietaryPreference?: Array< string | null > | null,
  foodAllergies?: Array< string | null > | null,
  additionalNotes?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type CreateFoodInput = {
  id?: string | null,
  email?: string | null,
  userId?: string | null,
  foodname?: string | null,
  calorie: number,
  protein: number,
  carbs: number,
  fats: number,
  vitaminc: number,
  iron: number,
  calcium: number,
  potassium: number,
};

export type ModelFoodConditionInput = {
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  foodname?: ModelStringInput | null,
  calorie?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  fats?: ModelIntInput | null,
  vitaminc?: ModelIntInput | null,
  iron?: ModelIntInput | null,
  calcium?: ModelIntInput | null,
  potassium?: ModelIntInput | null,
  and?: Array< ModelFoodConditionInput | null > | null,
  or?: Array< ModelFoodConditionInput | null > | null,
  not?: ModelFoodConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type food = {
  __typename: "food",
  id: string,
  email?: string | null,
  userId?: string | null,
  foodname?: string | null,
  calorie: number,
  protein: number,
  carbs: number,
  fats: number,
  vitaminc: number,
  iron: number,
  calcium: number,
  potassium: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFoodInput = {
  id: string,
  email?: string | null,
  userId?: string | null,
  foodname?: string | null,
  calorie?: number | null,
  protein?: number | null,
  carbs?: number | null,
  fats?: number | null,
  vitaminc?: number | null,
  iron?: number | null,
  calcium?: number | null,
  potassium?: number | null,
};

export type DeleteFoodInput = {
  id: string,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  activityLevel?: ModelStringInput | null,
  height?: ModelIntInput | null,
  weight?: ModelIntInput | null,
  fitnessGoals?: ModelStringInput | null,
  targetCalorie?: ModelIntInput | null,
  customeGoals?: ModelStringInput | null,
  dietaryPreference?: ModelStringInput | null,
  foodAllergies?: ModelStringInput | null,
  additionalNotes?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelFoodFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  foodname?: ModelStringInput | null,
  calorie?: ModelIntInput | null,
  protein?: ModelIntInput | null,
  carbs?: ModelIntInput | null,
  fats?: ModelIntInput | null,
  vitaminc?: ModelIntInput | null,
  iron?: ModelIntInput | null,
  calcium?: ModelIntInput | null,
  potassium?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoodFilterInput | null > | null,
  or?: Array< ModelFoodFilterInput | null > | null,
  not?: ModelFoodFilterInput | null,
};

export type ModelFoodConnection = {
  __typename: "ModelFoodConnection",
  items:  Array<food | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  activityLevel?: ModelSubscriptionStringInput | null,
  height?: ModelSubscriptionIntInput | null,
  weight?: ModelSubscriptionIntInput | null,
  fitnessGoals?: ModelSubscriptionStringInput | null,
  targetCalorie?: ModelSubscriptionIntInput | null,
  customeGoals?: ModelSubscriptionStringInput | null,
  dietaryPreference?: ModelSubscriptionStringInput | null,
  foodAllergies?: ModelSubscriptionStringInput | null,
  additionalNotes?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFoodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  foodname?: ModelSubscriptionStringInput | null,
  calorie?: ModelSubscriptionIntInput | null,
  protein?: ModelSubscriptionIntInput | null,
  carbs?: ModelSubscriptionIntInput | null,
  fats?: ModelSubscriptionIntInput | null,
  vitaminc?: ModelSubscriptionIntInput | null,
  iron?: ModelSubscriptionIntInput | null,
  calcium?: ModelSubscriptionIntInput | null,
  potassium?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoodFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoodFilterInput | null > | null,
};

export type CallSampleFunctionMutationVariables = {
  input?: string | null,
};

export type CallSampleFunctionMutation = {
  callSampleFunction?: string | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFoodMutationVariables = {
  input: CreateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type CreateFoodMutation = {
  createFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFoodMutationVariables = {
  input: UpdateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type UpdateFoodMutation = {
  updateFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFoodMutationVariables = {
  input: DeleteFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type DeleteFoodMutation = {
  deleteFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      email?: string | null,
      userId?: string | null,
      firstname: string,
      lastname?: string | null,
      age: number,
      gender: string,
      activityLevel?: string | null,
      height: number,
      weight: number,
      fitnessGoals?: string | null,
      targetCalorie?: number | null,
      customeGoals?: string | null,
      dietaryPreference?: Array< string | null > | null,
      foodAllergies?: Array< string | null > | null,
      additionalNotes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFoodQueryVariables = {
  id: string,
};

export type GetFoodQuery = {
  getFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoodsQueryVariables = {
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodsQuery = {
  listFoods?:  {
    __typename: "ModelFoodConnection",
    items:  Array< {
      __typename: "food",
      id: string,
      email?: string | null,
      userId?: string | null,
      foodname?: string | null,
      calorie: number,
      protein: number,
      carbs: number,
      fats: number,
      vitaminc: number,
      iron: number,
      calcium: number,
      potassium: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    email?: string | null,
    userId?: string | null,
    firstname: string,
    lastname?: string | null,
    age: number,
    gender: string,
    activityLevel?: string | null,
    height: number,
    weight: number,
    fitnessGoals?: string | null,
    targetCalorie?: number | null,
    customeGoals?: string | null,
    dietaryPreference?: Array< string | null > | null,
    foodAllergies?: Array< string | null > | null,
    additionalNotes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
};

export type OnCreateFoodSubscription = {
  onCreateFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
};

export type OnUpdateFoodSubscription = {
  onUpdateFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoodSubscriptionVariables = {
  filter?: ModelSubscriptionFoodFilterInput | null,
};

export type OnDeleteFoodSubscription = {
  onDeleteFood?:  {
    __typename: "food",
    id: string,
    email?: string | null,
    userId?: string | null,
    foodname?: string | null,
    calorie: number,
    protein: number,
    carbs: number,
    fats: number,
    vitaminc: number,
    iron: number,
    calcium: number,
    potassium: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
