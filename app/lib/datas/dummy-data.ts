export default function DummyData() {
  const HotelData = [
    {
      id: 1,
      hotel_name: "Caspel Hotel Rungkut",
      city: "Surabaya",
      rooms: [
        {
          room_id: "CHR1",
          room_name: "Sagitarius",
          room_price_per_night: 300000,
          isAvailable: false,
          room_facilities: [
            "wifi",
            "1 Double Bed",
            "Coffe machine",
            "bathroom",
          ],
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484597216.jpg?k=5bced38a4f5ca72698d506a2b9e1604f45bf6e62de2f8aa707dce2888b4c8a86&o=",
          room_description: "Deskripsi singkat yg hanya satu kalimat",
        },
        {
          room_id: "CHR2",
          room_name: "Unicorn",
          room_price_per_night: 270000,
          isAvailable: false,
          room_facilities: ["wifi", "1 Double Bed", "bathroom"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description: "Lorem ipsum dolor sit amet aiwjdni ",
        },
        {
          room_id: "CHR3",
          room_name: "Adalah pokoknya",
          room_price_per_night: 230000,
          isAvailable: false,
          room_facilities: ["wifi", "1 Single Bed", "bathroom"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description:
            "Lorem ipsum dolor sit amet aiwjdni  ajwnd iawhdiah w dhauiwhduai duiahwdhauid uiahduiahduihaiudhaihduiaw d",
        },
      ],
    },
    {
      id: 2,
      hotel_name: "Caspel Hotel Ahmad Yani",
      city: "Surabaya",
      rooms: [
        {
          room_id: "CHAY1",
          room_name: "Lawang Sewu",
          room_price_per_night: 220000,
          isAvailable: true,
          room_facilities: ["wifi", "1 Double Bed", "bathroom"],
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484597216.jpg?k=5bced38a4f5ca72698d506a2b9e1604f45bf6e62de2f8aa707dce2888b4c8a86&o=",
          room_description: "Deskripsi singkat yg hanya satu kalimat",
        },
        {
          room_id: "CHAY2",
          room_name: "Galaxy Gaming",
          room_price_per_night: 600000,
          isAvailable: true,
          room_facilities: ["wifi", "1 Double Bed", "bathroom", "PC Gaming"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description: "Lorem ipsum dolor sit amet aiwjdni ",
        },
        {
          room_id: "CHAY3",
          room_name: "Godzillaxx",
          room_price_per_night: 230000,
          isAvailable: false,
          room_facilities: ["wifi", "1 Single Bed", "bathroom"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description:
            "Lorem ipsum dolor sit amet aiwjdni  ajwnd iawhdiah w dhauiwhduai duiahwdhauid uiahduiahduihaiudhaihduiaw d",
        },
      ],
    },
    {
      id: 3,
      hotel_name: "Caspel Hotel Tunjungan",
      city: "Surabaya",

      rooms: [
        {
          room_id: "CHT1",
          room_name: "Jarvis Room",
          room_price_per_night: 120000,
          isAvailable: true,
          room_facilities: [
            "wifi",
            "1 Double Bed",
            "Coffe machine",
            "bathroom",
          ],
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484597216.jpg?k=5bced38a4f5ca72698d506a2b9e1604f45bf6e62de2f8aa707dce2888b4c8a86&o=",
          room_description: "Deskripsi singkat yg hanya satu kalimat",
        },
        {
          room_id: "CHt2",
          room_name: "Nama random",
          room_price_per_night: 310000,
          isAvailable: false,
          room_facilities: ["wifi", "1 Double Bed", "bathroom", "Water Heater"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description: "Lorem ipsum dolor sit amet aiwjdni ",
        },
        {
          room_id: "CHt3",
          room_name: "Fly High",
          room_price_per_night: 170000,
          isAvailable: true,
          room_facilities: ["wifi", "1 Single Bed", "bathroom"],
          image:
            "https://www.kkday.com/en-sg/blog/wp-content/uploads/jp_capsule_735728935-1170x680.jpg",
          room_description:
            "Lorem ipsum dolor sit amet aiwjdni  ajwnd iawhdiah w dhauiwhduai duiahwdhauid uiahduiahduihaiudhaihduiaw d",
        },
      ],
    },
  ];

  return HotelData;
}

//   const LocationDatas = [
//     {
//       City: "Surabaya",
//       hotelLocations: [
//         {
//           name: "Caspel Hotel Rungkut",
//         },
//         {
//           name: "Caspel Hotel Wiyung",
//         },
//       ],
//     },
//     {
//       City: "Jombang",
//       hotelLocations: [
//         {
//           name: "Caspel Hotel Mojoagung",
//         },
//         {
//           name: "Caspel Hotel Tembelang",
//         },
//         {
//           name: "Caspel Hotel Plandaan",
//         },
//       ],
//     },
//     {
//       City: "Jember",
//       hotelLocations: [
//         {
//           name: "Caspel Hotel Ajung",
//         },
//         {
//           name: "Caspel Hotel Balung",
//         },
//         {
//           name: "Caspel Hotel Cumukmas",
//         },
//         {
//           name: "Caspel Hotel Kaliwates",
//         },
//       ],
//     },
//   ];
