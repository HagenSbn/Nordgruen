export type StandortData = {
  slug: string;
  name: string;
  region: string;
  distance: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  localSection: {
    title: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    desc: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
};

export const standorte: StandortData[] = [
  {
    slug: "hamburg",
    name: "Hamburg",
    region: "Freie und Hansestadt Hamburg",
    distance: "ca. 40 km südöstlich",
    metaTitle: "Baumpflege Hamburg – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Professionelle Baumpflege in Hamburg: Baumschnitt, Baumfällung, Kronenpflege und Baumkontrolle von ETW- und FLL-zertifizierten Fachleuten. Jetzt Termin anfragen.",
    intro: [
      "Nordgrün ist Ihr regionaler Ansprechpartner für professionelle Baumpflege in Hamburg und dem gesamten Hamburger Stadtgebiet. Als inhabergeführtes Unternehmen mit European Tree Worker (ETW) und FLL-zertifiziertem Baumkontrolleur führen wir alle Maßnahmen fachgerecht nach ZTV-Baumpflege-Richtlinien und DIN-Normen durch.",
      "Hamburg ist geprägt von einem dichten Baumbestand in Parks, Alleen und Privatgärten. Vom Stadtpark Winterhude über die Grünanlagen in Harburg bis zu den Privatgärten in Rahlstedt oder Blankenese: Bäume sind ein fester Bestandteil des Hamburger Stadtbilds – und stellen Eigentümer gleichzeitig vor anspruchsvolle Pflegepflichten. Wir übernehmen Baumschnitt, Kronenpflege, Fällarbeiten und Baumkontrollen zuverlässig im gesamten Stadtgebiet.",
      "Hamburg verfügt über eines der strengsten Baumschutzgesetze Deutschlands. Bäume ab einem Stammumfang von 80 cm dürfen ohne Genehmigung der zuständigen Behörde nicht gefällt werden. Als erfahrene Baumpfleger kennen wir die Hamburger Rechtslage und unterstützen Sie bei der Antragstellung, damit notwendige Maßnahmen rechtssicher und ohne Verzögerung umgesetzt werden können.",
    ],
    localSection: {
      title: "Baumpflege in Hamburg: Warum regelmäßige Kontrolle so wichtig ist",
      paragraphs: [
        "Hamburgs Baumbestand leidet zunehmend unter urbanem Stress. Verdichtete Böden durch Pflasterung, Trockenperioden im Sommer, Schädlingsbefall und Einschränkungen durch Leitungen und Bebauung setzen stadtnahen Bäumen zu. Besonders ältere Alleebäume und Stadtparktrees zeigen vermehrt Vitalitätsverluste, die regelmäßige Sichtkontrollen unerlässlich machen.",
        "Hinzu kommt die Sturmgefahr: Nordseestürme und Tiefdruckgebiete wie Orkan Xavier (2017) oder Sturmtief Zeynep (2022) haben in Hamburg erhebliche Schäden hinterlassen. Grundstückseigentümer tragen die Verkehrssicherungspflicht für Bäume auf ihrem Gelände – bei Unterlassen drohen Haftungsrisiken. Eine jährliche Sichtkontrolle durch einen FLL-zertifizierten Baumkontrolleur schafft hier rechtliche Klarheit.",
        "Nordgrün führt Baumkontrollen, Pflegemaßnahmen und bei Bedarf sichere Fällungen im gesamten Hamburger Stadtgebiet durch – für Privatkunden in Eimsbüttel oder Bergedorf ebenso wie für Wohnungseigentümergemeinschaften, Wohnungsbaugesellschaften und Gewerbebetriebe.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Hamburg",
        desc: "Regelmäßiger Baumschnitt erhält die Vitalität und Standsicherheit Ihrer Bäume. In Hamburg mit seinen dichten Wohnlagen ist ein fachmäßiger Kronenpflegeschnitt besonders wichtig, um Schäden an Gebäuden, Leitungen und Nachbargrundstücken zu vermeiden. Wir führen alle Schnittmaßnahmen nach ZTV-Baumpflege durch – von der Kroneneinkürzung bis zum Lichtraumprofilschnitt.",
      },
      {
        title: "Baumfällung in Hamburg",
        desc: "Baumfällungen in Hamburg erfordern ab einem bestimmten Stammumfang eine behördliche Genehmigung nach dem Hamburgischen Baumschutzgesetz. Wir übernehmen für Sie sowohl die Antragstellung als auch die fachgerechte Durchführung – inklusive Abtransport des Holzes und Entsorgung. Auch Problemfällungen in engen Hamburger Innenhöfen und Hintergärten führen wir sicher durch.",
      },
      {
        title: "Kronenpflege an Alleebäumen",
        desc: "Hamburgs Alleen – etwa in Altona, Wandsbek oder Bahrenfeld – prägen das Stadtbild und sind schützenswert. Eine fachgerechte Kronenpflege erhält die charakteristische Form der Alleebäume und sichert den Abstand zu Versorgungsleitungen und Fahrbahnen. Alle Maßnahmen erfolgen nach FLL-Richtlinien.",
      },
      {
        title: "Verkehrssicherungspflicht & Baumkontrolle",
        desc: "Als Grundstückseigentümer in Hamburg sind Sie verpflichtet, Ihre Bäume regelmäßig auf Standsicherheit und Schäden zu kontrollieren. Unsere FLL-zertifizierten Baumkontrolleure führen Sichtkontrollen, Baumkataster und Gutachten durch und erstellen dokumentierte Berichte, die Sie im Schadensfall rechtlich absichern.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Nach Sturmtiefen über der Nordsee kommt es in Hamburg regelmäßig zu umgestürzten Bäumen und abgebrochenen Kronenteilen. Nordgrün reagiert schnell auf Notfälle und beseitigt sturmbedingte Schäden fachgerecht – um Gefahren für Personen und Gebäude umgehend zu beheben.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Hamburg?",
        a: "Die Kosten für Baumpflege in Hamburg richten sich nach Art und Umfang der Maßnahme sowie nach der Größe und Lage des Baums. Ein Kronenpflegeschnitt beginnt je nach Baumart und Zugänglichkeit ab ca. 150–300 €. Wir erstellen Ihnen nach einer kostenlosen Besichtigung vor Ort ein transparentes Festpreisangebot.",
      },
      {
        q: "Brauche ich in Hamburg eine Genehmigung zum Fällen eines Baumes?",
        a: "Ja. Das Hamburgische Baumschutzgesetz schützt Bäume ab einem Stammumfang von 80 cm, gemessen in 1 m Höhe. Für das Fällen dieser Bäume ist ein Antrag beim zuständigen Bezirksamt erforderlich. Wir unterstützen Sie bei der Antragstellung und kennen die behördlichen Abläufe.",
      },
      {
        q: "Wie schnell sind Termine in Hamburg verfügbar?",
        a: "Für normale Pflegemaßnahmen vergeben wir Termine in der Regel innerhalb von ein bis zwei Wochen. Bei sturmschadenbedingten Notfällen reagieren wir schnellstmöglich – rufen Sie uns direkt an.",
      },
      {
        q: "Arbeitet Nordgrün auch in Hamburger Innenhofsituationen?",
        a: "Ja. Wir verfügen über Erfahrung mit beengten Platzverhältnissen in Hamburger Innenhöfen und Hintergärten. Mittels Klettertechnik und kleinem Gerät führen wir auch dort Fällungen und Schnittarbeiten sicher und schonend durch.",
      },
      {
        q: "Wann darf ein Baum in Hamburg gefällt werden?",
        a: "Baumfällungen sind in Hamburg grundsätzlich außerhalb der Vogelbrutzeit vom 1. Oktober bis 28./29. Februar möglich. In der Brutzeit (1. März bis 30. September) sind Fällungen nur in begründeten Ausnahmefällen erlaubt. Wir prüfen die Situation für Sie.",
      },
    ],
  },
  {
    slug: "kiel",
    name: "Kiel",
    region: "Landeshauptstadt Schleswig-Holstein",
    distance: "ca. 65 km nördlich",
    metaTitle: "Baumpflege Kiel – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Kiel: Baumschnitt, Kronenpflege, Baumfällung und Baumkontrolle. FLL-zertifiziert, zuverlässig, regional. Kostenlosen Vor-Ort-Termin anfragen.",
    intro: [
      "Nordgrün führt professionelle Baum- und Landschaftspflege in Kiel und dem Kieler Umland durch. Als FLL-zertifizierter Baumkontrolleur und European Tree Worker kennen wir die spezifischen Anforderungen, die das Küstenklima der Fördestadt an Bäume und Grünanlagen stellt.",
      "Kiel ist als Landeshauptstadt mit einer Vielzahl öffentlicher Parks, Alleen und privater Gärten ausgestattet. Ob in Düsternbrook, Gaarden oder Pries – Bäume prägen das Stadtbild und bedürfen regelmäßiger Pflege, um gesund und standsicher zu bleiben. Nordgrün übernimmt Baumschnitt in Kiel, Kronenpflege, Baumkontrollen und Fällarbeiten für Privat-, Gewerbe- und Kommunalkunden.",
      "Die Nähe zur Kieler Förde und die maritime Lage sorgen für besondere Wetterbedingungen: Salzhaltige Luft, häufige Starkwinde und Sturmtiefs aus westlicher und nordwestlicher Richtung belasten den Baumbestand in Kiel dauerhaft. Regelmäßige Kontrollen und rechtzeitige Pflegemaßnahmen sind hier keine Kür, sondern Pflicht.",
    ],
    localSection: {
      title: "Baumschnitt in Kiel: Küstenklima als besondere Herausforderung",
      paragraphs: [
        "Die maritime Lage Kiels bringt einen der höchsten Sturmexpositionswerte in ganz Schleswig-Holstein mit sich. Westwinde und Tiefdruckgebiete, die von der Nordsee über die Schleswig-Holsteinische Geest nach Kiel ziehen, sind keine Seltenheit. Bäume in Hanglage – etwa am Westufer der Förde in Düsternbrook oder Schilksee – sind besonders gefährdet. Eine fachgerechte Kronenpflege reduziert den Windwiderstand erheblich.",
        "Der Schrevenpark und die Grünanlagen rund um den Kleinen Kiel stellen einen wichtigen stadtökologischen Puffer dar. Ältere Baumbestände in diesen Bereichen erfordern regelmäßige Sichtkontrollen nach FLL-Richtlinien. Auch in den Wohngebieten Gaarden und Wellingdorf ist der Baumbestand in vielen Privatgärten gut entwickelt und braucht fachkundige Pflege.",
        "Als Grundstückseigentümer in Kiel sind Sie zur Verkehrssicherung Ihrer Bäume verpflichtet. Die Baumschutzsatzung der Landeshauptstadt Kiel regelt zusätzlich, wann für das Fällen eines Baumes eine Genehmigung erforderlich ist. Nordgrün kennt die lokalen Vorschriften und begleitet Sie rechtssicher durch den gesamten Prozess.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Kiel",
        desc: "Durch das häufig stürmische Wetter an der Förde ist eine regelmäßige Kronenauslichtung in Kiel besonders sinnvoll. Wir reduzieren den Windwiderstand der Krone fachgerecht und sichern die Standfestigkeit – nach ZTV-Baumpflege und FLL-Richtlinien.",
      },
      {
        title: "Baumfällung in Kiel",
        desc: "Bei Baumfällungen in Kiel prüfen wir vorab, ob die Baumschutzsatzung der Landeshauptstadt Kiel eine Genehmigungspflicht begründet. Wir übernehmen auf Wunsch die Antragstellung und führen die Fällung sicher und sauber durch – auch an steilen Grundstücken am Förderand.",
      },
      {
        title: "Kronenpflege an Küstenbäumen",
        desc: "Salzluft und Starkwinde stellen Bäume in Kieler Küstennähe vor besondere Herausforderungen. Wir führen standortgerechte Kronenpflegeschnitte durch, die die natürliche Widerstandsfähigkeit der Bäume stärken, ohne ihr Erscheinungsbild zu beeinträchtigen.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Unsere FLL-zertifizierten Baumkontrolleure führen regelmäßige Sichtkontrollen durch und erstellen dokumentierte Gutachten. Das schützt Sie als Grundstückseigentümer in Kiel vor Haftungsrisiken – insbesondere nach Sturmereignissen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Stürme aus dem Westen treffen Kiel oft unvorbereitet. Bei sturmgeschädigten oder umgestürzten Bäumen reagiert Nordgrün schnell und beseitigt die Gefahr fachgerecht – für Sicherheit auf Ihrem Grundstück und im öffentlichen Raum.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Kiel?",
        a: "Die Kosten richten sich nach Baumgröße, Standort und Art der Maßnahme. Einfache Kroneneinkürzungen beginnen ab ca. 150 €, umfangreichere Arbeiten an großen Bäumen können mehrere hundert Euro kosten. Wir besichtigen Ihr Grundstück kostenlos und erstellen ein unverbindliches Festpreisangebot.",
      },
      {
        q: "Brauche ich in Kiel eine Genehmigung zum Fällen eines Baumes?",
        a: "In Kiel gilt die Baumschutzsatzung der Landeshauptstadt. Bäume ab einem Stammumfang von 60 cm (gemessen in 1 m Höhe) sind genehmigungspflichtig. Wir prüfen für Sie, ob Ihr Baum unter die Satzung fällt, und unterstützen bei der Antragstellung.",
      },
      {
        q: "Wie wind- und sturmgefährdet sind Bäume in Kiel?",
        a: "Kiel zählt durch seine Küstenlage zu den sturmexponierteren Standorten in Norddeutschland. Regelmäßige Baumkontrollen und Kronenpflegemaßnahmen reduzieren das Sturmschadensrisiko erheblich. Wir empfehlen eine jährliche Sichtkontrolle.",
      },
      {
        q: "Wie schnell können Sie in Kiel vor Ort sein?",
        a: "Für geplante Maßnahmen sind Termine in der Regel innerhalb von zwei Wochen möglich. Notfälle nach Sturmereignissen bearbeiten wir prioritär – bitte rufen Sie uns direkt an.",
      },
    ],
  },
  {
    slug: "luebeck",
    name: "Lübeck",
    region: "Hansestadt Lübeck",
    distance: "ca. 70 km östlich",
    metaTitle: "Baumpflege Lübeck – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Lübeck: Kronenpflege, Baumfällung, Baumkontrolle nach FLL-Standard. Für Privatkunden, Vermieter und Gewerbetreibende in der Hansestadt.",
    intro: [
      "Nordgrün bietet professionelle Baum- und Landschaftspflege in Lübeck und dem Lübecker Umland an. Unsere zertifizierten Fachleute – ETW und FLL-Baumkontrolleur – führen alle Maßnahmen nach aktuellen Fachstandards durch und kennen die besonderen Anforderungen der Hansestadt.",
      "Lübeck verbindet mittelalterliches Stadtbild mit großzügigen Grünflächen: der Stadtwald, die Ufer von Trave und Wakenitz sowie zahlreiche Parks und Villengärten in Stadtteilen wie St. Jürgen oder Schlutup beherbergen einen wertvollen, teils historischen Baumbestand. Dieser erfordert sachkundige Pflege, die sowohl das Erscheinungsbild als auch die Standsicherheit erhält.",
      "Als UNESCO-Welterbestadt gelten in Lübeck teils besondere Rücksichtnahmen im Umgang mit Grünsubstanz im historischen Stadtbereich. Nordgrün arbeitet sensibel und gezielt – mit Blick auf Baumerhalt statt unnötigem Rückschnitt, und nur dort eingreifend, wo es fachlich geboten ist.",
    ],
    localSection: {
      title: "Warum Baumpflege in Lübeck besondere Sorgfalt erfordert",
      paragraphs: [
        "Die Lage Lübecks zwischen Ostsee und Wakenitzniederung sorgt für ein vergleichsweise feuchtes Kleinklima. Viele ältere Bäume in Lübecks Wohngebieten weisen altersbedingte Strukturschwächen auf, die durch regelmäßige Sichtkontrollen erkannt werden müssen, bevor es zu Brüchen oder Ausfällen kommt. Besonders in sturmexponierten Lagen nahe Travemünde ist Vorsorge wichtig.",
        "Der Stadtwald Lübeck ist eine der grünen Lungen der Hansestadt – aber auch private Gärten in Stadteilen wie Buntekuh, Moisling oder Kücknitz sind reich bepflanzt. Viele dieser Bäume stehen seit Jahrzehnten und benötigen professionelle Pflege: von der Kronenpflege über den Rückschnitt bis zur Totholzentnahme.",
        "Nordgrün führt in Lübeck Baumschnitt, Kronenpflege, Baumkontrollen und Fällarbeiten für Privatkunden, Vermieter und Unternehmen durch. Bei genehmigungspflichtigen Eingriffen nach der Lübecker Baumschutzsatzung übernehmen wir auf Wunsch die Antragstellung.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Lübeck",
        desc: "Lübecks historischer Baumbestand – Linden, Eichen und Kastanien in Parks und Alleen – erfordert behutsame Kronenpflege. Wir führen Schnittmaßnahmen nach ZTV-Baumpflege durch und achten darauf, den natürlichen Habitus der Bäume zu erhalten.",
      },
      {
        title: "Baumfällung in Lübeck",
        desc: "Wenn ein Baum gefällt werden muss, klären wir zunächst die Genehmigungspflicht nach der Lübecker Baumschutzsatzung. Wir übernehmen die Antragstellung und führen die Fällung sicher durch – mit anschließendem Abtransport und fachgerechter Entsorgung.",
      },
      {
        title: "Kronenpflege an älteren Bäumen",
        desc: "Viele Privatgärten in Lübeck beherbergen alte Obstbäume, Linden oder Eichen, die regelmäßige Pflegemaßnahmen benötigen. Kronenpflegeschnitte nach FLL-Richtlinien verlängern die Lebenserwartung dieser Bäume und erhöhen ihre Standsicherheit.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Regelmäßige Sichtkontrollen durch unsere FLL-zertifizierten Baumkontrolleure schaffen Rechtssicherheit für Lübecker Grundstückseigentümer. Wir dokumentieren den Zustand Ihrer Bäume und empfehlen gezielte Maßnahmen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Sturmereignisse an der Ostseeküste können auch Lübecks Baumbestand treffen. Nordgrün ist bei sturmschadenbedingten Notfällen schnell vor Ort und beseitigt Gefahrenstellen sicher – auch in Wohngebieten mit beengten Verhältnissen.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Lübeck?",
        a: "Die Kosten hängen von Baumgröße, Zustand und Art der Maßnahme ab. Kronenpflegeschnitte an mittelgroßen Bäumen beginnen je nach Aufwand ab ca. 150–250 €. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein schriftliches Festpreisangebot.",
      },
      {
        q: "Gilt in Lübeck eine Baumschutzsatzung?",
        a: "Ja, die Hansestadt Lübeck verfügt über eine Baumschutzsatzung, die bestimmte Bäume ab einem definierten Stammumfang schützt. Für Fällungen genehmigungspflichtiger Bäume ist ein Antrag beim zuständigen Fachbereich der Stadt erforderlich. Wir begleiten Sie dabei.",
      },
      {
        q: "Wie schnell können Sie in Lübeck einen Termin anbieten?",
        a: "Für reguläre Pflegemaßnahmen planen wir Termine in der Regel innerhalb von zwei Wochen. Bei sturmschadenbedingten Notfällen priorisieren wir und kommen schnellstmöglich.",
      },
      {
        q: "Arbeiten Sie auch im Lübecker Stadtwald oder nur auf Privatgrundstücken?",
        a: "Wir arbeiten vorwiegend auf privaten und gewerblichen Grundstücken sowie für Wohnungseigentümergemeinschaften. Für Arbeiten auf öffentlichem Gelände sprechen Sie uns direkt an – wir prüfen, ob ein Einsatz möglich ist.",
      },
    ],
  },
  {
    slug: "elmshorn",
    name: "Elmshorn",
    region: "Kreis Pinneberg",
    distance: "ca. 20 km südlich",
    metaTitle: "Baumpflege Elmshorn – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Elmshorn: Baumschnitt, Kronenpflege, Baumfällung und Baumkontrolle. Regionaler Ansprechpartner im Kreis Pinneberg. Jetzt kostenlosen Termin anfragen.",
    intro: [
      "Nordgrün ist Ihr lokaler Ansprechpartner für Baum- und Landschaftspflege in Elmshorn und dem südlichen Kreis Pinneberg. Von unserem Standort in Kiebitzreihe aus erreichen wir Elmshorn in wenigen Minuten – kurze Wege, schnelle Reaktionszeiten und persönliche Betreuung sind unser Anspruch.",
      "Elmshorn ist eine gewachsene Mittelstadt mit einem vielfältigen Baumbestand: ältere Alleen im Stadtkern, große Privatgärten in den Außenbereichen und Obstbaumbestände in den Übergangszonen zum Alten Land. Viele dieser Bäume sind seit Jahrzehnten gewachsen und benötigen regelmäßige, fachgerechte Pflege – für Baumschnitt in Elmshorn, Kronenpflege oder eine Baumkontrolle nach FLL-Standard.",
      "Besonders die Nähe zur Krückau macht den Elmshorner Baumbestand anspruchsvoll: Bäume in Flussnähe wachsen oft unter wechselfeuchten Bodenbedingungen und zeigen spezifische Schadbilder. Nordgrün erkennt diese frühzeitig und reagiert mit gezielten Maßnahmen.",
    ],
    localSection: {
      title: "Besonderheiten der Baumpflege in Elmshorn",
      paragraphs: [
        "Die Krückau prägt Elmshorns Stadtbild und schafft gleichzeitig besondere Bedingungen für den Baumbestand in Ufernähe. Staunässe und Wurzelschäden durch Hochwasserereignisse sind in diesen Bereichen keine Seltenheit. Regelmäßige Baumkontrollen – insbesondere nach Starkregenereignissen – helfen, Schäden früh zu erkennen.",
        "Im Übergang zur landwirtschaftlichen Umgebung finden sich in Elmshorn viele ältere Obstbäume und Knicks, die gepflegt werden wollen. Nordgrün kennt diese Landschaftsstrukturen aus der täglichen Arbeit im Kreis Pinneberg und verfügt über die nötige Erfahrung im Umgang mit Obstgehölzen und Feldgehölzen.",
        "Ob Privatgarten in der Innenstadt, Gewerbegrundstück am Stadtrand oder Grünanlage in einer Wohnungseigentümergemeinschaft – Nordgrün übernimmt alle Pflegemaßnahmen zuverlässig und nach Fachstandard. Wir sind in Elmshorn und Umgebung regelmäßig tätig und kennen die lokalen Gegebenheiten.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Elmshorn",
        desc: "Ob Zier- oder Obstbaum, Großgehölz oder Hecke – wir führen alle Schnittmaßnahmen in Elmshorn nach ZTV-Baumpflege durch. Regelmäßiger Baumschnitt erhält die Vitalität Ihrer Bäume und verhindert Schäden an Gebäuden und Zäunen.",
      },
      {
        title: "Baumfällung in Elmshorn",
        desc: "Bei notwendigen Fällungen klären wir zunächst, ob die kommunale Baumschutzsatzung oder der Biotopschutz nach Landesrecht eine Genehmigung erfordert. Wir übernehmen auf Wunsch die Antragstellung und führen die Fällung sauber und sicher durch.",
      },
      {
        title: "Kronenpflege an Obstbäumen",
        desc: "Ältere Obstbäume in Elmshorner Gärten benötigen regelmäßige Kronenpflege, um ertragreich und gesund zu bleiben. Wir kennen die spezifischen Schnitttechniken für Äpfel, Birnen, Kirschen und andere Obstgehölze und beraten Sie zur richtigen Maßnahme zur richtigen Zeit.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Regelmäßige Sichtkontrollen nach FLL-Richtlinien sind auch für Privatgärten in Elmshorn sinnvoll – besonders für ältere Bäume in Ufernähe oder nach Sturmereignissen. Wir erstellen dokumentierte Berichte und empfehlen gezielte Maßnahmen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Sturmschäden treten im westlichen Schleswig-Holstein regelmäßig auf. Bei umgestürzten Bäumen oder abgebrochenen Kronenteilen reagiert Nordgrün schnell – wir sind in Elmshorn und Umgebung innerhalb kürzester Zeit vor Ort.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumschnitt in Elmshorn?",
        a: "Die Kosten richten sich nach Baumart, Größe und Aufwand. Kleinere Schnittmaßnahmen beginnen ab ca. 100–150 €. Für einen genauen Preis besichtigen wir Ihren Baum kostenlos und erstellen ein unverbindliches Festpreisangebot.",
      },
      {
        q: "Brauche ich in Elmshorn eine Genehmigung für eine Baumfällung?",
        a: "Elmshorn verfügt über eine kommunale Baumschutzsatzung. Bäume ab einem bestimmten Stammumfang sind genehmigungspflichtig. Wir prüfen dies vorab für Sie und begleiten Sie bei der Antragstellung.",
      },
      {
        q: "Pflegen Sie auch Obstbäume in Elmshorn?",
        a: "Ja, Obstbaumpflege ist ein fester Bestandteil unserer Arbeit im Kreis Pinneberg. Wir führen Erziehungs- und Erhaltungsschnitte an Obstbäumen durch und beraten Sie zur optimalen Pflegefrequenz.",
      },
      {
        q: "Wie schnell können Sie nach einem Sturm in Elmshorn reagieren?",
        a: "Da wir in der unmittelbaren Umgebung tätig sind, können wir bei Notfällen in der Regel sehr schnell reagieren. Rufen Sie uns direkt an – wir koordinieren den Einsatz so rasch wie möglich.",
      },
    ],
  },
  {
    slug: "pinneberg",
    name: "Pinneberg",
    region: "Kreis Pinneberg",
    distance: "ca. 30 km südöstlich",
    metaTitle: "Baumpflege Pinneberg – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Pinneberg: professioneller Baumschnitt, Kronenpflege, Baumfällung und Baumkontrolle. ETW-zertifiziert. Jetzt kostenlosen Vor-Ort-Termin vereinbaren.",
    intro: [
      "Nordgrün führt professionelle Baum- und Landschaftspflege in Pinneberg und der gesamten Kreisstadt durch. Als regionaler Betrieb aus dem Kreis Pinneberg kennen wir die lokalen Gegebenheiten gut und sind schnell vor Ort – für Baumschnitt in Pinneberg, Kronenpflege oder Baumkontrollen nach FLL-Standard.",
      "Pinneberg ist eine grüne Stadt: Der Drosteipark mit seinem historischen Baumbestand, die zahlreichen Privatgärten in Thesdorf, Waldenau und Quellental sowie die Übergangszonen zum Alten Land prägen das Stadtbild. Viele dieser Bäume sind gut entwickelt und bedürfen regelmäßiger, fachkundiger Pflege.",
      "Die Nähe zu Hamburg bedeutet für Pinneberg auch, dass die Verkehrssicherungspflicht von Grundstückseigentümern ernst genommen werden muss. Nordgrün unterstützt Sie mit Baumkontrollen, gezielten Pflegemaßnahmen und – wenn nötig – sicheren Fällungen.",
    ],
    localSection: {
      title: "Baumpflege in Pinneberg: Zwischen Stadt und Altem Land",
      paragraphs: [
        "Die Lage Pinnebergs im Übergang zwischen der Hamburger Metropolregion und der Obstanbauregion Altes Land schlägt sich auch im Baumbestand nieder. Viele ältere Privatgärten in Pinneberg beherbergen Obstbäume, Linden und Buchen, die über Jahrzehnte gewachsen sind und teils erheblichen Pflegebedarf haben.",
        "Der Drosteipark als historische Grünanlage im Stadtzentrum beherbergt einige der ältesten Bäume Pinnebergs. Diese erfordern besondere Sorgfalt bei der Pflege: nicht zu viel Eingriff, aber rechtzeitige Totholzentnahme und Kontrolle der Standsicherheit. Nordgrün führt solche Arbeiten sensibel und fachgerecht durch.",
        "Auch in den neueren Wohngebieten Pinnebergs und in der Wohnbebauung entlang der Hauptachsen stehen Bäume oft in beengter Nachbarschaft zu Gebäuden, Leitungen und Nachbargrundstücken. Regelmäßiger Baumschnitt in Pinneberg ist daher nicht nur für die Baumgesundheit wichtig, sondern auch zur Schadensvorbeugung.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Pinneberg",
        desc: "Wir führen Baumschnitt in Pinneberg für Privat- und Gewerbekunden durch – von der Kronenauslichtung über den Lichtraumprofilschnitt bis zum Rückschnitt überhängender Äste. Alle Maßnahmen nach ZTV-Baumpflege und FLL-Richtlinien.",
      },
      {
        title: "Baumfällung in Pinneberg",
        desc: "Notwendige Fällungen führen wir sicher und sauber durch. Wir klären vorab die Genehmigungssituation gemäß der Baumschutzsatzung der Stadt Pinneberg und koordinieren Antragstellung und Ausführung.",
      },
      {
        title: "Kronenpflege an Obstbäumen und Großgehölzen",
        desc: "Pinneberg liegt am Rand des Alten Landes – Obstbäume sind entsprechend häufig in Privatgärten zu finden. Wir führen fachgerechte Pflege- und Erziehungsschnitte durch, um Ertrag, Gesundheit und Standsicherheit der Bäume langfristig zu sichern.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Unsere FLL-zertifizierten Baumkontrolleure überprüfen Ihre Bäume in Pinneberg systematisch auf Vitalität und Standsicherheit. Wir erstellen dokumentierte Kontrollberichte, die Sie im Schadensfall rechtlich absichern.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Sturmtiefer, die aus der Nordseerichtung über den Kreis Pinneberg ziehen, können erhebliche Schäden verursachen. Nordgrün beseitigt sturmbedingte Schäden schnell und fachgerecht – von geknickten Kronenteilen bis zum vollständig umgestürzten Baum.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Pinneberg?",
        a: "Kosten variieren je nach Baumart, Umfang und Zugänglichkeit. Kleinere Schnittmaßnahmen beginnen ab ca. 120 €, umfangreichere Kronenpflegemaßnahmen können mehrere Hundert Euro kosten. Wir besichtigen Ihren Baum kostenlos und erstellen ein transparentes Angebot.",
      },
      {
        q: "Gilt in Pinneberg eine Baumschutzsatzung?",
        a: "Ja, Pinneberg verfügt über eine kommunale Baumschutzsatzung. Bäume ab einem bestimmten Stammumfang sind vor der Fällung genehmigungspflichtig. Wir prüfen dies gerne für Sie und unterstützen bei der Antragstellung.",
      },
      {
        q: "Schneiden Sie auch Obstbäume in Pinneberg?",
        a: "Ja, Obstbaumpflege gehört zu unserem festen Leistungsangebot. Wir führen Erziehungs- und Erhaltungsschnitte durch und beraten, welcher Eingriff für Ihren Obstbaum sinnvoll ist.",
      },
      {
        q: "Wie lange dauert ein typischer Einsatz?",
        a: "Das hängt stark von der Maßnahme ab. Ein einfacher Kronenpflegeschnitt an einem mittelgroßen Baum dauert meist zwischen ein und drei Stunden. Bei größeren Fällungen oder mehreren Bäumen planen wir entsprechend mehr Zeit ein.",
      },
    ],
  },
  {
    slug: "neumuenster",
    name: "Neumünster",
    region: "Kreisfreie Stadt Neumünster",
    distance: "ca. 55 km nördlich",
    metaTitle: "Baumpflege Neumünster – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Neumünster: Baumschnitt, Kronenpflege, Baumfällung und Baumkontrolle nach FLL-Standard. Für Privatkunden und Gewerbetreibende. Termin anfragen.",
    intro: [
      "Nordgrün führt professionelle Baum- und Landschaftspflege in Neumünster und dem Umland durch. Als ETW- und FLL-zertifizierter Betrieb bringen wir die nötige Fachkompetenz mit, um Bäume in der kreisfreien Stadt Neumünster fachgerecht zu pflegen, zu kontrollieren oder bei Bedarf sicher zu fällen.",
      "Neumünster liegt im Herzen Schleswig-Holsteins und ist von einer abwechslungsreichen Landschaft umgeben. Innerhalb der Stadt sorgen Grünanlagen wie der Stadtpark und der Kleinflecken für wichtige grüne Strukturen. In den Wohngebieten Neumünsters – etwa in Brachenfeld oder Einfeld – finden sich viele ältere Privatgärten mit gut entwickeltem Baumbestand.",
      "Die offene Lage Neumünsters in der Holstein-Geest macht den Baumbestand anfällig für Starkwinde und Sturmereignisse. Regelmäßige Baumkontrollen und rechtzeitige Kronenpflegemaßnahmen sind daher auch in Neumünster keine Option, sondern eine Frage der Verantwortung als Grundstückseigentümer.",
    ],
    localSection: {
      title: "Baumpflege in Neumünster: Zwischen Stadtgrün und offener Geest",
      paragraphs: [
        "Die offene Geestlandschaft rund um Neumünster bietet Starkwinden wenig Widerstand. Bäume in Randlagen oder auf windexponierten Grundstücken sind stärker gefährdet als in windgeschützten Innenstadtlagen. Eine regelmäßige Kronenpflege, die den Windwiderstand gezielt reduziert, ist hier besonders wichtig.",
        "Die Stör fließt durch den Stadtbereich Neumünsters und schafft in Uferbereichen spezifische Standortbedingungen für Bäume. Wechselfeuchte Böden und Wurzelkonkurrenz durch benachbarte Gehölze erfordern fachkundige Einschätzung. Nordgrün beurteilt solche Situationen im Rahmen von Baumkontrollen und empfiehlt geeignete Maßnahmen.",
        "Für Privatgärten, Wohnungseigentümergemeinschaften und Gewerbekunden in Neumünster übernehmen wir alle Baumpflegeleistungen – von der Sichtkontrolle über den Pflegeschnitt bis zur Fällung. Wir kennen die lokalen Baumschutzvorgaben und begleiten Sie rechtssicher durch Genehmigungs- und Ausführungsverfahren.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Neumünster",
        desc: "Regelmäßiger Baumschnitt in Neumünster erhält die Standsicherheit und Vitalität Ihrer Bäume. Wir führen alle Schnittmaßnahmen nach ZTV-Baumpflege durch – für Privatgärten ebenso wie für Gewerbeimmobilien und Wohnkomplexe.",
      },
      {
        title: "Baumfällung in Neumünster",
        desc: "Baumfällungen in Neumünster führen wir nach vorheriger Prüfung der Genehmigungslage durch. Bei genehmigungspflichtigen Bäumen übernehmen wir die Antragstellung. Wir arbeiten sauber und hinterlassen das Grundstück besenrein.",
      },
      {
        title: "Kronenpflege und Kronensicherung",
        desc: "Ältere Bäume in Neumünsters Wohngebieten benötigen häufig eine Kronensicherung oder gezielte Kronenauslichtung. Nordgrün beurteilt den Zustand Ihrer Bäume fachgerecht und empfiehlt die wirtschaftlich sinnvollste Maßnahme.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Unsere FLL-zertifizierten Baumkontrolleure führen regelmäßige Sichtkontrollen in Neumünster durch. Dokumentierte Berichte schaffen Transparenz und schützen Sie als Eigentümer vor Haftungsrisiken.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Bei sturmschadenbedingten Notfällen in Neumünster und Umgebung reagiert Nordgrün schnell. Wir beseitigen umgestürzte Bäume und gebrochene Kronenteile sicher und fachgerecht.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Neumünster?",
        a: "Die Kosten hängen von der Größe des Baumes, der Art der Maßnahme und der Zugänglichkeit ab. Einfache Schnittmaßnahmen beginnen ab ca. 120–150 €. Wir besichtigen Ihr Grundstück kostenlos und erstellen ein schriftliches Angebot.",
      },
      {
        q: "Gilt in Neumünster eine Baumschutzsatzung?",
        a: "Neumünster hat eine kommunale Baumschutzsatzung. Bestimmte Bäume sind vor Fällung oder erheblichem Rückschnitt genehmigungspflichtig. Wir prüfen vorab, ob Ihre geplante Maßnahme einer Genehmigung bedarf.",
      },
      {
        q: "Führen Sie auch Landschaftspflegearbeiten in Neumünster durch?",
        a: "Ja, neben Baumpflege übernehmen wir auch Heckenschnitt, Gehölzpflege und umfassendere Grünpflegearbeiten auf privaten und gewerblichen Flächen in Neumünster und Umgebung.",
      },
      {
        q: "Wie schnell sind Sie in Neumünster vor Ort?",
        a: "Reguläre Termine vergeben wir in der Regel innerhalb von zwei Wochen. Sturmschäden und Notfälle priorisieren wir – bitte rufen Sie direkt an.",
      },
    ],
  },
  {
    slug: "norderstedt",
    name: "Norderstedt",
    region: "Kreis Segeberg",
    distance: "ca. 35 km südöstlich",
    metaTitle: "Baumpflege Norderstedt – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Norderstedt: Baumschnitt, Kronenpflege, Baumfällung und Baumkontrolle. Für Privatgärten, WEGs und Gewerbeflächen. Jetzt Termin anfragen.",
    intro: [
      "Nordgrün bietet professionelle Baum- und Landschaftspflege in Norderstedt und dem angrenzenden Hamburger Norden an. Als ETW- und FLL-zertifizierter Betrieb führen wir alle Maßnahmen fachgerecht durch – von Baumschnitt in Norderstedt über Kronenpflege bis zur Baumkontrolle nach FLL-Standard.",
      "Norderstedt ist mit rund 85.000 Einwohnern die viertgrößte Stadt Schleswig-Holsteins und grenzt direkt an Hamburg. Das prägt auch den Charakter des Baumbestands: In den dicht besiedelten Wohngebieten von Harksheide, Garstedt und Glashütte stehen viele Bäume in engem Verhältnis zu Gebäuden, Straßen und Nachbargrundstücken. Regelmäßiger Baumschnitt ist hier besonders wichtig, um Schäden zu vermeiden.",
      "Der Stadtpark Norderstedt mit seinen Seen und Grünflächen bildet das grüne Herz der Stadt. Aber auch in den ursprünglichen Dorfkernen der vier Gründungsgemeinden – Harksheide, Garstedt, Friedrichsgabe und Glashütte – stehen teils alte Bäume, die besondere Pflege benötigen. Nordgrün kennt diese Strukturen und arbeitet sowohl für Privathaushalte als auch für Wohnungseigentümergemeinschaften und Gewerbetreibende.",
    ],
    localSection: {
      title: "Baumpflege in Norderstedt: Dichte Bebauung und gewachsener Baumbestand",
      paragraphs: [
        "Norderstedt entstand 1970 aus dem Zusammenschluss von vier Gemeinden und hat sich seitdem zu einer der modernsten Städte Schleswig-Holsteins entwickelt. Die Bebauungsstruktur ist entsprechend heterogen: ältere Bereiche mit etabliertem Baumbestand wechseln sich mit neueren Wohnquartieren ab, in denen jüngere Bäume noch im Aufbau sind.",
        "In der dichten Wohnbebauung Norderstedts stehen Bäume häufig in der Nähe von Hauswänden, Carports, Leitungen und Grundstücksgrenzen. Regelmäßiger Baumschnitt verhindert Schäden und Konflikte mit Nachbarn. Als erfahrene Baumpfleger kennen wir die rechtlichen Abstände und führen Schnittmaßnahmen sauber und gerichtstest durch.",
        "Norderstedt grenzt an Hamburg, weshalb für Grundstücke in dieser Region besondere Aufmerksamkeit auf die Verkehrssicherungspflicht gelegt werden sollte. Unsere FLL-zertifizierten Baumkontrolleure führen strukturierte Sichtkontrollen durch und erstellen dokumentierte Berichte.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Norderstedt",
        desc: "In den dicht besiedelten Wohnquartieren Norderstedts ist ein regelmäßiger Baumschnitt besonders wichtig. Wir führen Kroneneinkürzungen, Lichtraumprofilschnitte und Kronenauslichtungen nach ZTV-Baumpflege durch – zuverlässig und mit sauberem Arbeitsabschluss.",
      },
      {
        title: "Baumfällung in Norderstedt",
        desc: "Baumfällungen in Norderstedt führen wir nach Prüfung der kommunalen Baumschutzsatzung durch. Bei Bedarf übernehmen wir die Antragstellung und koordinieren die Maßnahme inklusive Abtransport.",
      },
      {
        title: "Kronenpflege und Totholzentnahme",
        desc: "Besonders ältere Bäume in den Dorfkernen Norderstedts weisen häufig Totholz auf. Eine regelmäßige Totholzentnahme und Kronenpflege erhöht die Sicherheit und verlängert die Lebenserwartung des Baumes.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Als FLL-zertifizierter Baumkontrolleur überprüfen wir Ihre Bäume in Norderstedt strukturiert und dokumentiert. Wohnungseigentümergemeinschaften und Vermieter profitieren besonders von regelmäßigen Kontrollzyklen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Sturmschäden können auch in dicht besiedelten Stadtteilen Norderstedts schnell gefährlich werden. Nordgrün beseitigt sturmbedingte Schäden sicher und rasch – auch in beengten Verhältnissen.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumschnitt in Norderstedt?",
        a: "Je nach Baumgröße, Art der Maßnahme und Zugänglichkeit liegen die Kosten für einen Kronenpflegeschnitt zwischen ca. 120 und 400 €. Nach einer kostenlosen Besichtigung erhalten Sie ein transparentes Festpreisangebot.",
      },
      {
        q: "Gilt in Norderstedt eine Baumschutzsatzung?",
        a: "Ja, Norderstedt verfügt über eine Baumschutzsatzung. Bäume ab einem bestimmten Stammumfang sind vor Fällung genehmigungspflichtig. Wir prüfen das vorab und begleiten Sie bei Bedarf durch das Genehmigungsverfahren.",
      },
      {
        q: "Arbeiten Sie auch für Wohnungseigentümergemeinschaften in Norderstedt?",
        a: "Ja, WEGs gehören zu unseren regelmäßigen Auftraggebern. Wir bieten regelmäßige Baumkontrollzyklen und koordinieren Pflegemaßnahmen nach Absprache mit der Hausverwaltung.",
      },
      {
        q: "Wie schnell können Sie in Norderstedt vor Ort sein?",
        a: "Reguläre Termine planen wir innerhalb von ein bis zwei Wochen. Notfälle nach Sturmschäden priorisieren wir – bitte rufen Sie in dringenden Fällen direkt an.",
      },
    ],
  },
  {
    slug: "itzehoe",
    name: "Itzehoe",
    region: "Kreisstadt Steinburg",
    distance: "ca. 25 km nördlich",
    metaTitle: "Baumpflege Itzehoe – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Baumpflege in Itzehoe: Baumschnitt, Kronenpflege, Baumfällung und Knickpflege im Kreis Steinburg. Regionaler Betrieb, FLL-zertifiziert. Jetzt anfragen.",
    intro: [
      "Nordgrün ist Ihr Ansprechpartner für professionelle Baum- und Landschaftspflege in Itzehoe und dem Kreis Steinburg. Von unserem Standort in Kiebitzreihe erreichen wir Itzehoe schnell – für Baumschnitt, Kronenpflege, Baumfällungen und Baumkontrollen nach FLL-Standard.",
      "Itzehoe ist eine der ältesten Städte Holsteins und verfügt über einen gewachsenen Baumbestand in Parks, Alleen und privaten Gärten. Rund um das historische Stadtzentrum und entlang der Stör finden sich alte Bäume, die einer besonderen Pflege bedürfen. Die Kreisstadt Steinburg ist außerdem umgeben von einer intensiv genutzten Agrarlandschaft, in der Knicks und Feldgehölze eine wichtige ökologische Funktion erfüllen.",
      "Nordgrün führt in Itzehoe alle gängigen Baumpflegeleistungen durch – für Privatgärten, Gewerbegrundstücke und Wohnungseigentümergemeinschaften. Darüber hinaus sind wir spezialisiert auf Knickpflege nach schleswig-holsteinischem Landesrecht und kennen die genehmigungsrechtlichen Anforderungen.",
    ],
    localSection: {
      title: "Baumpflege in Itzehoe: Altstadtbäume, Störufer und Knicklandschaft",
      paragraphs: [
        "Die Lage Itzehoes an der Stör bringt besondere Bedingungen für den Baumbestand mit sich. Bäume in Ufernähe wachsen auf zeitweise überschwemmten Böden, was die Wurzelentwicklung und Standfestigkeit beeinflusst. Regelmäßige Sichtkontrollen – besonders nach Hochwasserereignissen – sind für diese Standorte wichtig.",
        "Die Marschenlandschaft um Itzehoe herum ist geprägt von einem dichten Netz an Knicks und Feldgehölzen. Diese Landschaftsstrukturen unterliegen dem Schutz des Landesnaturschutzgesetzes Schleswig-Holstein und dürfen nur in den gesetzlich definierten Zeitfenstern gepflegt werden. Nordgrün kennt die Vorschriften zur Knickpflege und führt diese fachgerecht und rechtskonform durch.",
        "In der Itzehoer Innenstadt und in den Wohngebieten rund um das Kloster stehen viele ältere Bäume, die das Stadtbild prägen. Kronenpflege, Totholzentnahme und bei Bedarf Fällungen führen wir auch in beengten Lagen sicher und sauber durch.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Itzehoe",
        desc: "Baumschnitt in Itzehoe führen wir für Privatgärten, Gewerbekunden und Wohnungseigentümergemeinschaften durch. Alle Schnittmaßnahmen erfolgen nach ZTV-Baumpflege und FLL-Richtlinien – fachgerecht und schonend.",
      },
      {
        title: "Baumfällung in Itzehoe",
        desc: "Fällungen in Itzehoe koordinieren wir inklusive Prüfung der Genehmigungslage. Bei genehmigungspflichtigen Bäumen beantragen wir die Genehmigung und führen die Fällung anschließend sicher und sauber durch.",
      },
      {
        title: "Knickpflege im Kreis Steinburg",
        desc: "Knicks sind das charakteristische Landschaftselement Schleswig-Holsteins und stehen unter gesetzlichem Schutz. Nordgrün führt die auf Seite gesetzlich vorgeschriebene Knickpflege fachgerecht und termingerecht durch – für Landwirte und Privatgrundstückseigentümer im Kreis Steinburg.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Unsere FLL-zertifizierten Baumkontrolleure überprüfen Bäume in Itzehoe und Umgebung auf Standsicherheit und Vitalität. Besonders für Bäume in Ufernähe oder nach Hochwasserereignissen empfehlen wir regelmäßige Kontrollen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Nordwestliche Sturmereignisse treffen den Kreis Steinburg regelmäßig. Nordgrün beseitigt sturmbedingte Schäden in Itzehoe und Umgebung schnell und fachgerecht – für Sicherheit auf Ihrem Grundstück.",
      },
    ],
    faq: [
      {
        q: "Was kostet Baumpflege in Itzehoe?",
        a: "Kosten variieren je nach Baumart, Umfang und Zugänglichkeit. Einfache Schnittarbeiten beginnen ab ca. 100–150 €. Wir besichtigen Ihren Baum kostenlos und erstellen ein unverbindliches Festpreisangebot.",
      },
      {
        q: "Brauche ich in Itzehoe eine Genehmigung für eine Baumfällung?",
        a: "Itzehoe verfügt über eine kommunale Baumschutzsatzung. Bäume ab einem bestimmten Stammumfang sind genehmigungspflichtig. Wir prüfen die Situation vorab und begleiten Sie bei der Antragstellung.",
      },
      {
        q: "Führen Sie auch Knickpflege in der Umgebung Itzehoes durch?",
        a: "Ja, Knickpflege ist Teil unseres Angebots im Kreis Steinburg. Wir führen die gesetzlich vorgeschriebene Pflege in den erlaubten Zeiträumen durch und halten alle naturschutzrechtlichen Vorgaben ein.",
      },
      {
        q: "Wie schnell reagieren Sie bei Notfällen in Itzehoe?",
        a: "Da wir in der unmittelbaren Region tätig sind, können wir bei Notfällen zeitnah reagieren. Rufen Sie uns direkt an – wir koordinieren den Einsatz schnellstmöglich.",
      },
    ],
  },
  {
    slug: "kiebitzreihe",
    name: "Kiebitzreihe",
    region: "Gemeinde Kiebitzreihe, Kreis Pinneberg",
    distance: "Heimatstandort",
    metaTitle: "Baumpflege Kiebitzreihe – Nordgrün Baum- und Landschaftspflege",
    metaDescription:
      "Nordgrün kommt aus Kiebitzreihe – professionelle Baumpflege, Baumfällung, Kronenpflege und Knickpflege direkt vor Ort. FLL-zertifiziert, inhabergeführt.",
    intro: [
      "Nordgrün hat seinen Sitz in Kiebitzreihe – mitten in der Gemeinde, für die wir täglich arbeiten. Als inhabergeführtes Unternehmen mit tiefen lokalen Wurzeln kennen wir die Bäume, Gärten und Knicks in der Umgebung aus persönlicher Erfahrung. Baumpflege in Kiebitzreihe ist für uns keine abstrakte Dienstleistung, sondern Arbeit in der eigenen Heimat.",
      "Kiebitzreihe liegt in der Geestlandschaft des Kreises Pinneberg, geprägt von landwirtschaftlichen Flächen, weitläufigen Privatgärten und dem charakteristischen Netz aus Knicks und Feldgehölzen. Viele Grundstücke in der Gemeinde verfügen über alten Obstbaumbestand, Linden und gewachsene Hecken – alles Strukturen, die regelmäßige und sachkundige Pflege benötigen.",
      "Als lokaler Betrieb sind wir schnell vor Ort, kennen die örtlichen Genehmigungsanforderungen und pflegen langjährige Kundenbeziehungen in der Gemeinde. Vertrauen, Verlässlichkeit und fachgerechte Ausführung – das sind die Werte, auf denen unsere Arbeit in Kiebitzreihe basiert.",
    ],
    localSection: {
      title: "Baumpflege in Kiebitzreihe: Heimat, Geest und gewachsene Gärten",
      paragraphs: [
        "Die Geestlandschaft rund um Kiebitzreihe ist geprägt von einem historisch gewachsenen Netz aus Knicks, Solitärbäumen und Feldgehölzen. Diese Strukturen sind nicht nur ökologisch wertvoll, sondern auch rechtlich geschützt. Nordgrün führt die gesetzlich vorgeschriebene Knickpflege nach den Vorgaben des schleswig-holsteinischen Landesnaturschutzgesetzes durch – termingerecht und fachgerecht.",
        "In den Privatgärten von Kiebitzreihe und den umliegenden Gemeinden stehen viele alte Obstbäume, Eichen und Linden, die teils seit Generationen gepflegt werden. Wir kennen viele dieser Bäume aus mehrjähriger Betreuung und können ihren Zustand und Pflegebedarf verlässlich einschätzen.",
        "Sturmschäden nach nordwestlichen Tiefdrucklagen sind auch in Kiebitzreihe keine Seltenheit. Als ortansässiger Betrieb sind wir bei Notfällen am schnellsten vor Ort – oft noch am selben Tag. Kurze Wege, direkte Kommunikation und kein bürokratischer Aufwand: Das ist der Vorteil, wenn Sie mit einem Betrieb aus der eigenen Gemeinde zusammenarbeiten.",
      ],
    },
    services: [
      {
        title: "Baumschnitt & Kronenpflege in Kiebitzreihe",
        desc: "Wir führen Baumschnitt und Kronenpflege in Kiebitzreihe und den unmittelbar umliegenden Gemeinden durch. Egal ob Obstbaum, Linde oder Solitärgehölz – alle Maßnahmen erfolgen nach ZTV-Baumpflege und FLL-Richtlinien.",
      },
      {
        title: "Baumfällung in Kiebitzreihe",
        desc: "Notwendige Fällungen führen wir sicher und sauber durch. Wir kennen die lokalen Genehmigungsanforderungen und koordinieren alle notwendigen Schritte – von der Behördenanfrage bis zum Abtransport des Holzes.",
      },
      {
        title: "Knickpflege im Kreis Pinneberg",
        desc: "Knicks sind das Rückgrat der Geestlandschaft und stehen unter besonderem Schutz. Nordgrün führt die auf der Seite des Gesetzes vorgeschriebene periodische Knickpflege durch – im richtigen Zeitfenster und nach anerkannten Pflegegrundsätzen.",
      },
      {
        title: "Baumkontrolle & Verkehrssicherung",
        desc: "Regelmäßige Baumkontrollen nach FLL-Richtlinien bieten auch in Kiebitzreihe wichtige Rechtssicherheit. Wir überprüfen Ihre Bäume auf Standsicherheit, dokumentieren den Zustand und empfehlen gezielte Maßnahmen.",
      },
      {
        title: "Notfällung nach Sturmschäden",
        desc: "Als Betrieb vor Ort sind wir bei Sturmschäden in Kiebitzreihe und unmittelbarer Umgebung am schnellsten verfügbar. Wir beseitigen Gefahrenstellen sicher und unkompliziert – oft noch am Tag des Schadensereignisses.",
      },
    ],
    faq: [
      {
        q: "Ist Nordgrün wirklich aus Kiebitzreihe?",
        a: "Ja. Nordgrün ist ein inhabergeführtes Unternehmen mit Sitz in Kiebitzreihe, Schulstraße 8. Wir leben und arbeiten in der Gemeinde – das spiegelt sich in kurzen Reaktionszeiten und persönlicher Betreuung wider.",
      },
      {
        q: "Was kostet Baumpflege in Kiebitzreihe?",
        a: "Die Kosten richten sich nach Art und Umfang der Maßnahme. Wir besichtigen Ihr Grundstück kostenlos und erstellen ein transparentes Festpreisangebot – ohne versteckte Kosten.",
      },
      {
        q: "Führen Sie auch Knickpflege durch?",
        a: "Ja, Knickpflege ist ein fester Bestandteil unserer Arbeit im Kreis Pinneberg. Wir führen die Pflege in den gesetzlich erlaubten Zeiträumen durch und halten alle naturschutzrechtlichen Anforderungen ein.",
      },
      {
        q: "Kann ich Sie auch für kleinere Arbeiten in Kiebitzreihe beauftragen?",
        a: "Selbstverständlich. Ob kleiner Obstbaumschnitt oder große Fällung – wir nehmen alle Aufträge in der Gemeinde an. Sprechen Sie uns einfach an.",
      },
    ],
  },
];

export function getStandortBySlug(slug: string): StandortData | undefined {
  return standorte.find((s) => s.slug === slug);
}
