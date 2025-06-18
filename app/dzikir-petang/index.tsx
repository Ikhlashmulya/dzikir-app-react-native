import DzikirLayout from "@/components/dzikir-layout";

const dzikirList = [
  {
    judul: "Membaca Ta'awudz",
    arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    latin: "Audzubillahi minasy syaithonir rojim",
    arti: "“Aku berlindung kepada Allah dari setan yang terkutuk”",
  },
  {
    judul: "Basmalah",
    arab: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
    latin: "Bismillahirrahmanirrahim",
    arti: "“Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang”",
  },
];

export default function DzikirPetangScreen() {
  return <DzikirLayout dzikirList={dzikirList} />;
}
