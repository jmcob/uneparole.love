<template>
    <div class="wrapper">
        <div class="cadre">
            <HeaderCross :DisplayParole="this.DisplayParole" />

            <NavBar
                :animation="this.animation"
                :DisplayParole="this.DisplayParole"
                :uneparole="this.uneparole"
                :uneref="this.uneref"
            />
            <FooterInfo :DisplayParole="this.DisplayParole" />
        </div>
    </div>
</template>
<script>
import HeaderCross from "../components/HeaderCross.vue";
import FooterInfo from "../components/FooterInfo.vue";
import BlueButton from "../components/BlueButton.vue";
import NavBar from "../components/NavBar.vue";
import UneParole from "../components/UneParole.vue";
import paroles from "../json/paroles.json";
import { mapState } from "vuex";

export default {
    name: "app",
    components: {
        HeaderCross,
        BlueButton,
        NavBar,
        UneParole,
        FooterInfo,
    },
    data() {
        return {
            // une parole et une ref come from paroles et refs in DisplayParoles()
            uneparole: "",
            uneref: "",
            // paroles and refs come from firestore
            paroles: [],
            refs: [],
            json: [],
            // wordClick and animation are activated with the button
            animation: true,
        };
    },
    created() {
        setTimeout(() => (this.animation = false), 700);
        this.GetParolesFromDB();
        // this.makeJSON();
        this.$store.state.wordClick = false;
        this.$store.state.outOfHome = false;
    },
    methods: {
        // async makeJSON() {
        //     this.$store.state.querySnapshot = await getDocs(
        //         collection(db, "word")
        //     );
        //     let i = 0;
        //     this.$store.state.querySnapshot.forEach((doc, index) => {
        //         JSON.stringify(
        //             this.json.push({
        //                 id: i,
        //                 parole: doc.data().parole,
        //                 ref: doc.data().ref,
        //                 ps: doc.data().ps,
        //                 gosp: doc.data().gosp,
        //                 at: doc.data().at,
        //                 nt: doc.data().nt,
        //             })
        //         );
        //         i++;
        //     });
        // },
        async GetParolesFromDB() {
            this.$store.state.ps = [];
            this.$store.state.gosp = [];
            this.$store.state.at = [];
            this.$store.state.nt = [];
            paroles.forEach((parole, id) => {
                this.paroles.push(parole.parole);
                this.refs.push(parole.ref);

                // count for informations view
                if (parole.ps) this.$store.state.ps.push(parole.ps);
                if (parole.gosp) this.$store.state.gosp.push(parole.gosp);
                if (parole.at) this.$store.state.at.push(parole.at);
                if (parole.nt) this.$store.state.nt.push(parole.nt);
            });
            this.$store.state.wordcount = this.paroles.length;
        },
        // la fonction qui affiche la parole sur la page

        async DisplayParole(all, ps, gosp) {
            if (all) {
                this.paroles = [];
                this.refs = [];
                paroles.forEach((parole, id) => {
                    this.paroles.push(parole.parole);
                    this.refs.push(parole.ref);
                });
            }
            if (ps) {
                this.paroles = [];
                this.refs = [];
                paroles.forEach((parole, id) => {
                    if (parole.ps) {
                        this.paroles.push(parole.parole);
                        this.refs.push(parole.ref);
                    }
                });
            }
            if (gosp) {
                this.paroles = [];
                this.refs = [];
                paroles.forEach((parole, id) => {
                    if (parole.gosp) {
                        this.paroles.push(parole.parole);
                        this.refs.push(parole.ref);
                    }
                });
            }
            let random = 0;
            random = this.GetRandomIndex(this.paroles.length);
            console.log(random);
            this.uneref = this.refs[random];
            this.uneparole = this.paroles[random];
            const replaceWith = `<br>`;
            this.uneparole = this.uneparole.replaceAll(/\\n/g, replaceWith);
            this.SpecialEffects();
        },
        // La randomisation de la parole
        GetRandomIndex(index) {
            const random = Math.random() * (index - 1);
            const roundedIndex = Math.round(random);
            return roundedIndex;
        },
        // apparition et disparition du bouton, et de l'animation
        SpecialEffects() {
            this.$store.state.wordClick = true;
            this.animation = true;
            setTimeout(() => (this.animation = false), 700);
        },
    },
    computed: mapState([
        // map this.wordLength to store.state.wordLength
        "wordcount",
    ]),
};
</script>
