// import agraImg from './assets/Agra.jpeg';
// import jaipurImg from './assets/Jaipur.jpeg';
// import goaImg from './assets/Goa.jpeg';
// import varanasiImg from './assets/Varanasi.jpeg';
// import darjeelingImg from './assets/Darjeeling.jpeg';
// import jaisalmerImg from './assets/Jaisalmer.jpeg';
// import kochiImg from './assets/Kochi.jpeg';
import mysoreImg from './assets/mysore.jpeg';
import udaipurImg from './assets/udaipur.jpeg';
import shimlaImg from './assets/shimla.jpeg';
import manaliImg from './assets/manali.jpeg';
import rishikeshImg from './assets/Rishikesh.jpeg';
import lehLadakhImg from './assets/Leh-Ladakh.jpeg';
import amritsarImg from './assets/Amritsar.jpeg';
import hyderabadImg from './assets/Hyderabad.jpeg';
import ootyImg from './assets/Ooty.jpeg';
import pondicherryImg from './assets/pndicherry.jpeg';
import andamanNicobarImg from './assets/Andaman and Nicobar Islands.jpeg';
import hampiImg from './assets/hampi.jpeg';
import ranthamboreImg from './assets/ranthambore.jpeg';
const data = [
    {
        id: 1,
        name: "Agra",
        info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
        image: "https://cdn.thecodehelp.in/Agra.jpeg",
        price: "35,758",
    },
    {
        id: 2,
        name: "Jaipur",
        info: "Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the 'Pink City' due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.",
        image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
        price: "82,560",
    },
    {
        id: 3,
        name: "Goa",
        info: "Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
        image: "https://cdn.thecodehelp.in/Goa.jpeg",
        price: "29,695",
    },
    {
        id: 4,
        name: "Varanasi",
        info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
        image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
        price: "31,095",
    },
    {
        id: 5,
        name: "Darjeeling",
        info: "Darjeeling is a town in the Indian state of West Bengal, known for its tea plantations, scenic views of the Himalayas, and the Darjeeling Himalayan Railway, a UNESCO World Heritage Site.",
        image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
        price: "78,595",
    },
    {
        id: 6,
        name: "Jaisalmer",
        info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
        image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
        price: "68,595",
    },
    {
        id: 7,
        name: "Kochi",
        info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
        image: "https://cdn.thecodehelp.in/Kochi.jpeg",
        price: "68,595",
    },
    {
        id: 8,
        name: "Mysore",
        info: "Mysore is a city in the southern part of India, known for its royal heritage and the famous Mysore Palace. The city is also famous for its Dasara festival, yoga, and silk sarees.",
        image: mysoreImg,
        price: "45,895",
    },
    {
        id: 9,
        name: "Udaipur",
        info: "Udaipur is a city in Rajasthan, known for its beautiful lakes, palaces, and historic forts. It is often referred to as the 'City of Lakes' and is a popular tourist destination.",
        image: udaipurImg,
        price: "55,765",
    },
    {
        id: 10,
        name: "Shimla",
        info: "Shimla is a hill station in northern India, known for its colonial architecture, cool climate, and scenic landscapes. It was the summer capital of British India and is a popular destination for tourists seeking a respite from the heat.",
        image: shimlaImg,
        price: "37,250",
    },
    {
        id: 11,
        name: "Manali",
        info: "Manali is a high-altitude resort town in the northern Indian state of Himachal Pradesh. It is known for its stunning mountains, adventure sports, and as a gateway to the Solang Valley and Rohtang Pass.",
        image: manaliImg,
        price: "42,895",
    },
    {
        id: 12,
        name: "Rishikesh",
        info: "Rishikesh is a city in northern India, located on the banks of the Ganges River. It is known as the 'Yoga Capital of the World' and is a major center for yoga and meditation. It is also a popular destination for adventure sports like white-water rafting.",
        image: rishikeshImg,
        price: "28,400",
    },
    {
        id: 13,
        name: "Leh-Ladakh",
        info: "Leh-Ladakh is a region in northern India known for its stunning landscapes, high-altitude desert, and Buddhist monasteries. It is a popular destination for trekking, biking, and adventure tourism.",
        image: lehLadakhImg,
        price: "92,500",
    },
    {
        id: 14,
        name: "Amritsar",
        info: "Amritsar is a city in the Indian state of Punjab, known for the Golden Temple, one of the holiest sites in Sikhism. The city is also known for its rich history, delicious cuisine, and vibrant culture.",
        image: amritsarImg,
        price: "25,760",
    },
    {
        id: 15,
        name: "Hyderabad",
        info: "Hyderabad is a city in southern India known for its historic monuments, including the Charminar and Golconda Fort. It is also famous for its biryani, pearls, and vibrant IT industry.",
        image: hyderabadImg,
        price: "53,210",
    },
    {
        id: 16,
        name: "Ooty",
        info: "Ooty is a hill station in southern India known for its tea plantations, pleasant climate, and scenic landscapes. It is a popular tourist destination in the Nilgiri Hills.",
        image: ootyImg,
        price: "46,500",
    },
    {
        id: 17,
        name: "Pondicherry",
        info: "Pondicherry is a coastal town in southern India known for its French colonial architecture, beautiful beaches, and vibrant culture. It is also known for the Aurobindo Ashram and Auroville.",
        image: pondicherryImg,
        price: "34,750",
    },
    {
        id: 18,
        name: "Andaman and Nicobar Islands",
        info: "The Andaman and Nicobar Islands are a group of islands in the Bay of Bengal known for their pristine beaches, clear waters, and rich marine life. It is a popular destination for diving and snorkeling.",
        image: andamanNicobarImg,
        price: "85,320",
    },
    {
        id: 19,
        name: "Hampi",
        info: "Hampi is a village in southern India known for its ancient ruins and temples. It is a UNESCO World Heritage Site and was once the capital of the Vijayanagara Empire.",
        image: hampiImg,
        price: "29,450",
    },
    {
        id: 20,
        name: "Ranthambore",
        info: "Ranthambore is a national park in Rajasthan, known for its population of Bengal tigers. The park is also home to a variety of other wildlife and ancient ruins, including the Ranthambore Fort.",
        image: ranthamboreImg,
        price: "65,700",
    }
];

export default data;
