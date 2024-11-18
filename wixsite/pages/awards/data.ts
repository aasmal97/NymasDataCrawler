export type AwardDataType = Partial<{
  headerTitle?: string | null;
  title: string;
  winner: string;
  description: string;
  yearAwarded: number;
  awardType: [string];
  imgUrl: string;
  ID: string;
  "Updated Date": string;
  "Created Date": string;
  Owner: string;
}>;
const data: AwardDataType[] = [
  {
    ID: "02d28380-0588-492a-9029-7dd521cc6498",
    headerTitle: "The Schlieffen Plan:",
    title: "International Perspectives on the German Strategy for World War I",
    winner:
      "by Hans Ehlert, Michael Epkenhans, Gerhard P. Gross, and an Engish translation edited by David T. Zabecki",
    description:
      "Published by University Press of Kentucky, 2014, in Lexington",
    yearAwarded: 2014,
    awardType: ["Arthur Goodzeit Award"],
    "Updated Date": "2024-09-19T23:08:14Z",
    "Created Date": "2024-09-19T23:07:18Z",
    imgUrl: "https://static.wixstatic.com/media/540886_c3fb9a65cee043d6bc683fb239e10de6~mv2.jpg",
    Owner: "540886b1-1fec-4f9d-b974-4fcde4a5a539",
  },
  {
    ID: "038f20b6-8625-4d59-af04-c97b1258d32f",
    headerTitle: "Downfall:",
    title: "The End of the Imperial Japanese Empire",
    winner: "by Richard B. Frank",
    description: "Published by Random House, 2009, in NY",
    yearAwarded: 1999,
    awardType: ["Arthur Goodzeit Award"],
    "Updated Date": "2024-09-19T23:07:45Z",
    "Created Date": "2024-09-19T23:07:18Z",
    Owner: "540886b1-1fec-4f9d-b974-4fcde4a5a539",
  },
  {
    ID: "0a65d27a-6d9c-43f0-943a-5c469055634a",
    headerTitle: null,
    title: "The Union war",
    winner: "by Gary W. Gallagher",
    description:
      "Published by Harvard University Press, 2011, in Cambridge, Mass. ISBN: 9780674045620",
    yearAwarded: 2011,
    awardType: ["Eugene Feit Award"],
    "Updated Date": "2024-09-19T23:08:26Z",
    "Created Date": "2024-09-19T23:07:18Z",
    Owner: "540886b1-1fec-4f9d-b974-4fcde4a5a539",
  },
  {
    ID: "0cf91194-5957-4ca4-a4ed-65c498fabe59",
    headerTitle: "The War for the Common Soldier:",
    title: "How Men Thought, Fought, and Survived in Civil War Armies",
    winner: "by Peter S. Carmichael",
    description:
      "Published by University of North Carolina Press, 2018, in Chapel Hill",
    yearAwarded: 2018,
    awardType: ["Eugene Feit Award"],
    "Updated Date": "2024-09-19T23:08:36Z",
    "Created Date": "2024-09-19T23:07:18Z",
    Owner: "540886b1-1fec-4f9d-b974-4fcde4a5a539",
  },
  {
    ID: "0f3c48ef-8217-4b60-b66a-1fa71282cff4",
    headerTitle: "Raising Churchill's Army",
    title: "The British Army and the War Against Germany, 1939-45",
    winner: "by David French",
    description: "Published by Oxford University Press ISBN: 0-19-820641-0",
    yearAwarded: 2000,
    awardType: ["Arthur Goodzeit Award"],
    "Updated Date": "2024-09-19T23:08:09Z",
    "Created Date": "2024-09-19T23:07:18Z",
    Owner: "540886b1-1fec-4f9d-b974-4fcde4a5a539",
  },
];
export default data;
