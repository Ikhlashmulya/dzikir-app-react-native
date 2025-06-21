import DzikirLayout from "@/components/dzikir-layout";
import { Dzikir } from "@/types/dzikir";

const dzikirList: Dzikir[] = [
  {
    judul: "Membaca Ta'awudz x1",
    arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    latin: "Audzubillahi minasy syaithonir rojim",
    arti: "“Aku berlindung kepada Allah dari setan yang terkutuk”",
    jumlah: 1
  },
  {
    judul: "Basmalah x2",
    arab: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
    latin: "Bismillahirrahmanirrahim",
    arti: "“Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang”",
    jumlah: 2
  },
];

export default function DzikirPagiScreen() {
  return <DzikirLayout dzikirList={dzikirList} />;
}
