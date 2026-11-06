/**
 * 多语言 codes 页文案（th / id / ko）
 *
 * 为什么只做这三语：GSC 60 天里 `โค้ดแมพhole fishing` 排 #2.2 / CTR 33%、
 * `홀 낚시 코드` #4.0 / CTR 26%、`kode redeem hole fishing` #4.8 / CTR 23% ——
 * 都是本地语言查询、现在只有英文页在接。菲律宾虽是最大市场（6,130 曝光）但搜的是英文，不做。
 */
export type CodesLocale = 'th' | 'id' | 'ko';

/** codes 页的 hreflang 版本表（所有语言页共用，互指必须对称） */
export const CODES_LANGS: Record<string, string> = {
  en: '/codes',
  th: '/th/codes',
  id: '/id/codes',
  ko: '/ko/codes',
  'x-default': '/codes',
};

export interface CodesCopy {
  /** <html lang> */
  htmlLang: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  switchLabel: string;
  statusTitle: string;
  statusHead: string;
  statusBody: string;
  stepsTitle: string;
  steps: string[];
  fakeTitle: string;
  fakeBody: string;
  eventTitle: string;
  eventBody: string;
  eventLink: string;
  altTitle: string;
  altIntro: string;
  alt: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  footer: string;
}

export const CODES_I18N: Record<CodesLocale, CodesCopy> = {
  th: {
    htmlLang: 'th',
    title: 'โค้ด Hole Fishing (พฤศจิกายน 2026) — 2 โค้ดที่ใช้ได้',
    description:
      'โค้ด Hole Fishing 2 ตัว: HAPPYHALLOWEEN รับ 3x Luck และ 2x Sell Value 15 นาที และ 123CODE รับ 20K Cash พร้อมวิธีกรอกและแหล่งยืนยัน',
    keywords: ['โค้ด hole fishing', 'โค้ด hole fishing roblox', 'โค้ดแมพ hole fishing', 'hole fishing codes', 'โค้ด roblox'],
    h1: 'โค้ด Hole Fishing',
    intro:
      'ตอนนี้มี 2 โค้ดที่ใช้ได้: HAPPYHALLOWEEN และ 123CODE — สองแหล่งอิสระลงโค้ดและรางวัลตรงกัน โดยเพิ่มเมื่อ 5 พฤศจิกายน 2026',
    switchLabel: 'English',
    statusTitle: 'สถานะโค้ด',
    statusHead: '2 โค้ดที่ใช้งาน — ตรวจซ้ำ 6 พฤศจิกายน',
    statusBody:
      'HAPPYHALLOWEEN = 3x Luck Boost และ 2x Sell Value Boost อย่างละ 15 นาที; 123CODE = 20K Cash. Roblox Den และ MrGuider ลงข้อมูลตรงกันโดยเพิ่มเมื่อ 5 พฤศจิกายน 2026 และ Roblox Den ระบุว่าทีมตรวจสอบทดสอบโค้ดในเกม ยังไม่พบประกาศจากผู้พัฒนาหรือวิดีโอการกรอกสำเร็จ จึงถือเป็นการยืนยันจากสองแหล่ง-editorial ไม่ใช่การทดสอบด้วยตัวเอง',
    stepsTitle: 'วิธีกรอกโค้ด',
    steps: [
      'เปิดเกม แล้วกดปุ่ม Store ที่เมนูด้านซ้ายมือ',
      'หน้าต่าง Exclusive Store จะเด้งขึ้นมา เลื่อนลงไปจนสุดจะเจอหัวข้อ Codes',
      'พิมพ์โค้ดลงในช่องให้ตรงตัวพิมพ์เล็ก-ใหญ่ แล้วกดปุ่ม Redeem สีเขียว',
      'ถ้าโค้ดใช้ได้ ของรางวัลจะขึ้นในหน้าต่างเดียวกัน ถ้าขึ้น error แปลว่าโค้ดผิดหรือหมดอายุ',
    ],
    fakeTitle: 'โค้ดปลอมที่กำลังแชร์กันอยู่',
    fakeBody:
      'ตั้งแต่ปลายกันยายนมีเว็บหลายเจ้าเอาโค้ดชุดเดียวกันไปลงว่า "ใช้ได้" — BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL ทั้งห้าตัวไม่มีตัวไหนจริง ผู้พัฒนาไม่เคยประกาศ และไม่มีคลิปไหนโชว์ว่ากรอกแล้วได้ของ วิดีโอ "Hole Fishing codes" บน YouTube ก็ไม่มีคลิปไหนโชว์กรอกสำเร็จเลย มีคลิปหนึ่งพิมพ์คำว่า "THANKS FOR WATCHING" ลงไปแทน',
    eventTitle: 'โค้ดใหม่ 5 พฤศจิกายน: HAPPYHALLOWEEN และ 123CODE',
    eventBody:
      'Roblox Den และ MrGuider เพิ่มโค้ดสองตัวนี้พร้อมรางวัลเดียวกันเมื่อ 5 พฤศจิกายน 2026 ช่วงอีเวนต์ Halloween วันที่ 25–26 ตุลาคมไม่มีโค้ดสาธารณะที่ยืนยันได้ แหล่งข้อมูลใหม่ไม่ได้ยืนยันว่า HAPPYHALLOWEEN ใช้ได้ตั้งแต่ช่วงนั้น',
    eventLink: 'ดูรายละเอียดอีเวนต์ Halloween เดิม',
    altTitle: 'ของฟรีเพิ่มเติมในเกม',
    altIntro: 'นอกเหนือจากโค้ดสองตัว ยังมีของฟรีที่ยืนยันแล้วในเกม:',
    alt: [
      'หีบรางวัลฟรีใกล้จุดเกิด — กดรับได้หลังกดไลก์เกมและเข้ากลุ่ม 67K CCU',
      'Server Hole ที่เปิดทุก ๆ ประมาณ 20 นาที ให้เงิน 4 เท่า',
      'ตกปลากลางคืน — ปลายุคกลางคืนราคาสูงกว่าปลากลางวันมาก',
      'เก็บ Fish Index ให้ครบ ได้โบนัส luck ถาวร',
    ],
    faqTitle: 'คำถามที่เจอบ่อย',
    faq: [
      {
        q: 'Hole Fishing มีโค้ดไหม',
        a: 'มี 2 ตัว: HAPPYHALLOWEEN ให้ 3x Luck Boost และ 2x Sell Value Boost อย่างละ 15 นาที และ 123CODE ให้ 20K Cash ทั้งคู่เพิ่มเมื่อ 5 พฤศจิกายน 2026',
      },
      {
        q: 'โค้ดจาก aeonsme / BIGGERHOLE ใช้ได้ไหม',
        a: 'ใช้ไม่ได้ทั้งหมด BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH และ CASTANDSELL เป็นโค้ดที่เว็บรวบรวมโค้ดกุขึ้นมา ผู้พัฒนาไม่เคยประกาศ',
      },
      {
        q: 'โค้ดใหม่จะออกเมื่อไหร่',
        a: 'ยังไม่มีกำหนดสำหรับโค้ดถัดไป โค้ดสาธารณะชุดแรกลงวันที่ 5 พฤศจิกายน 2026 และหน้านี้จะตรวจสถานะต่อทุกวัน',
      },
    ],
    footer: 'ข้อมูลจาก Roblox Den, MrGuider, หน้าเกม Roblox และกลุ่ม 67K CCU ตรวจล่าสุด 6 พฤศจิกายน 2026',
  },

  id: {
    htmlLang: 'id',
    title: 'Kode Hole Fishing (November 2026) — 2 Kode Aktif',
    description:
      'Dua kode Hole Fishing: HAPPYHALLOWEEN untuk 3x Luck dan 2x Sell Value 15 menit, serta 123CODE untuk 20K Cash. Lihat hadiah, sumber, dan cara redeem.',
    keywords: ['kode hole fishing', 'kode hole fishing roblox', 'kode redeem hole fishing', 'hole fishing codes', 'kode roblox'],
    h1: 'Kode Hole Fishing',
    intro:
      'Sekarang ada 2 kode aktif: HAPPYHALLOWEEN dan 123CODE. Dua sumber independen mencantumkan kode dan hadiah yang sama, ditambahkan 5 November 2026.',
    switchLabel: 'English',
    statusTitle: 'Status kode',
    statusHead: '2 kode aktif — diperiksa silang 6 November',
    statusBody:
      'HAPPYHALLOWEEN = 3x Luck Boost dan 2x Sell Value Boost, masing-masing 15 menit; 123CODE = 20K Cash. Roblox Den dan MrGuider mencantumkan data yang sama sebagai kode baru pada 5 November 2026, dan Roblox Den menyatakan editornya menguji kode di dalam game. Belum ada pengumuman resmi atau video redeem berhasil yang ditemukan, jadi status ini adalah konfirmasi editorial dua sumber, bukan pengujian langsung oleh kami.',
    stepsTitle: 'Cara redeem kode',
    steps: [
      'Buka game, lalu tekan tombol Store di menu kiri.',
      'Jendela Exclusive Store akan terbuka — gulir ke bawah sampai bertemu bagian Codes.',
      'Ketik kodenya persis sesuai huruf besar-kecil, lalu tekan tombol Redeem hijau.',
      'Kalau kodenya valid, hadiah langsung muncul di jendela itu. Kalau muncul error, berarti kodenya salah atau sudah kedaluwarsa.',
    ],
    fakeTitle: 'Kode palsu yang sedang beredar',
    fakeBody:
      'Sejak akhir September beberapa situs kode menyalin lima kode yang sama dan menyebutnya "aktif": BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL. Tidak ada satu pun yang asli — developer tidak pernah mengumumkannya, dan tidak ada rekaman yang menunjukkan kode itu berhasil di-redeem. Video "Hole Fishing codes" di YouTube juga tidak pernah menunjukkan redeem yang berhasil; ada yang malah mengetik "THANKS FOR WATCHING" ke kolom kode.',
    eventTitle: 'Kode baru 5 November: HAPPYHALLOWEEN dan 123CODE',
    eventBody:
      'Roblox Den dan MrGuider menambahkan kedua kode dengan hadiah yang sama pada 5 November 2026. Tidak ada kode publik yang terverifikasi selama event Halloween 25–26 Oktober, dan sumber baru tidak membuktikan bahwa HAPPYHALLOWEEN sudah aktif pada periode tersebut.',
    eventLink: 'Lihat detail event Halloween sebelumnya',
    altTitle: 'Hadiah gratis lainnya di dalam game',
    altIntro: 'Selain dua kode aktif, hadiah gratis ini juga sudah terverifikasi di dalam game:',
    alt: [
      'Peti hadiah gratis di dekat spawn — bisa diambil setelah like game dan join grup 67K CCU',
      'Server Hole yang terbuka kira-kira tiap 20 menit, memberi uang 4x',
      'Memancing malam — ikan malam harganya jauh di atas ikan siang',
      'Melengkapi Fish Index memberi bonus luck permanen',
    ],
    faqTitle: 'Pertanyaan yang sering muncul',
    faq: [
      {
        q: 'Apakah Hole Fishing punya kode?',
        a: 'Ya, ada 2: HAPPYHALLOWEEN memberi 3x Luck Boost dan 2x Sell Value Boost selama 15 menit masing-masing, sedangkan 123CODE memberi 20K Cash. Keduanya ditambahkan 5 November 2026.',
      },
      {
        q: 'Apakah kode BIGGERHOLE atau MUTATIONHUNT berfungsi?',
        a: 'Tidak. BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, dan CASTANDSELL adalah kode karangan situs agregator. Developer tidak pernah mengumumkannya.',
      },
      {
        q: 'Kapan kode berikutnya keluar?',
        a: 'Belum ada jadwal untuk kode berikutnya. Kode publik pertama tercatat pada 5 November 2026, dan halaman ini akan terus memeriksa statusnya setiap hari.',
      },
    ],
    footer: 'Sumber: Roblox Den, MrGuider, halaman game Roblox, dan grup 67K CCU. Dicek terakhir 6 November 2026.',
  },

  ko: {
    htmlLang: 'ko',
    title: '홀 낚시 코드 (2026년 11월) — 사용 가능한 코드 2개',
    description:
      '홀 낚시 코드 2개: HAPPYHALLOWEEN은 3x Luck과 2x Sell Value를 15분간, 123CODE는 20K Cash를 제공합니다. 보상, 출처, 입력 방법을 확인하세요.',
    keywords: ['홀 낚시 코드', '홀 피싱 코드', 'hole fishing 코드', '로블록스 홀 낚시 코드', 'hole fishing codes'],
    h1: '홀 낚시 코드 (Hole Fishing Codes)',
    intro:
      '현재 사용할 수 있는 코드는 HAPPYHALLOWEEN과 123CODE 두 개입니다. 두 독립 출처가 2026년 11월 5일에 같은 코드와 보상을 추가했습니다.',
    switchLabel: 'English',
    statusTitle: '코드 현황',
    statusHead: '사용 가능한 코드 2개 — 11월 6일 교차 확인',
    statusBody:
      'HAPPYHALLOWEEN = 3x Luck Boost와 2x Sell Value Boost 각각 15분, 123CODE = 20K Cash입니다. Roblox Den과 MrGuider가 2026년 11월 5일에 같은 내용을 추가했고, Roblox Den은 편집자가 게임 안에서 코드를 테스트한다고 명시합니다. 공식 공지나 성공적인 입력 영상은 아직 찾지 못했으므로, 이는 두 출처의 편집 확인이지 저희가 직접 테스트했다는 뜻은 아닙니다.',
    stepsTitle: '코드 입력 방법',
    steps: [
      '게임에 접속한 뒤 왼쪽 메뉴의 Store 버튼을 누릅니다.',
      'Exclusive Store 창이 뜨면 맨 아래까지 스크롤해서 Codes 항목을 찾습니다.',
      '코드를 대소문자 그대로 입력하고 초록색 Redeem 버튼을 누릅니다.',
      '정상 코드라면 같은 창에 보상이 표시됩니다. 오류가 뜨면 코드가 틀렸거나 만료된 것입니다.',
    ],
    fakeTitle: '지금 돌고 있는 가짜 코드',
    fakeBody:
      '9월 말부터 여러 코드 사이트가 같은 다섯 개를 "사용 가능"이라고 올리고 있습니다 — BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL. 다섯 개 모두 실제 코드가 아닙니다. 개발자가 공지한 적이 없고, 입력에 성공하는 장면을 보여준 영상도 없습니다. 유튜브 "Hole Fishing codes" 영상들도 성공 장면 없이 아무 문자열이나 입력하고, 어떤 영상은 아예 "THANKS FOR WATCHING"을 입력합니다.',
    eventTitle: '11월 5일 신규 코드: HAPPYHALLOWEEN과 123CODE',
    eventBody:
      'Roblox Den과 MrGuider가 2026년 11월 5일에 두 코드와 같은 보상을 추가했습니다. 10월 25–26일 Halloween 이벤트 당시에는 확인된 공개 코드가 없었으며, 새 출처들도 HAPPYHALLOWEEN이 그 기간에 이미 활성화됐다고 증명하지는 않습니다.',
    eventLink: '이전 Halloween 이벤트 정보 보기',
    altTitle: '게임 안의 다른 무료 보상',
    altIntro: '두 코드 외에도 게임 안에서 확인된 무료 보상은 다음과 같습니다:',
    alt: [
      '스폰 근처 무료 보상 상자 — 게임 좋아요와 67K CCU 그룹 가입 후 수령',
      '약 20분마다 열리는 Server Hole — 현금 4배',
      '밤 낚시 — 밤에만 나오는 물고기 가격이 낮 물고기보다 훨씬 높음',
      'Fish Index를 채우면 영구 럭 보너스',
    ],
    faqTitle: '자주 묻는 질문',
    faq: [
      {
        q: '홀 낚시에 코드가 있나요?',
        a: '네, 2개 있습니다. HAPPYHALLOWEEN은 3x Luck Boost와 2x Sell Value Boost를 각각 15분 제공하고, 123CODE는 20K Cash를 제공합니다. 두 코드 모두 2026년 11월 5일에 추가됐습니다.',
      },
      {
        q: 'BIGGERHOLE, MUTATIONHUNT 코드는 되나요?',
        a: '안 됩니다. BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL은 코드 수집 사이트가 만든 가짜입니다.',
      },
      {
        q: '다음 코드는 언제 나오나요?',
        a: '다음 코드 일정은 아직 공개되지 않았습니다. 첫 공개 코드는 2026년 11월 5일에 기록됐으며, 이 페이지에서 매일 상태를 다시 확인합니다.',
      },
    ],
    footer: '출처: Roblox Den, MrGuider, 로블록스 게임 페이지, 67K CCU 그룹. 최종 확인 2026년 11월 6일.',
  },
};
