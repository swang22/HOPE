var documenterSearchIndex = {"docs":
[{"location":"model_introduction/","page":"Model Introduction","title":"Model Introduction","text":"CurrentModule = HOPE","category":"page"},{"location":"model_introduction/#Model-Overview","page":"Model Introduction","title":"Model Overview","text":"","category":"section"},{"location":"model_introduction/","page":"Model Introduction","title":"Model Introduction","text":"The HOPE consists of multiple modes for modeling optimization problems of modern power systems and electricity markets, including:","category":"page"},{"location":"model_introduction/","page":"Model Introduction","title":"Model Introduction","text":"GTEP mode: a generation & transmission expansion planning model\nPCM mode: a production cost model\nOPF mode: (under development): an optimal power flow model\nDART mode: (under development): a bilevel market model for simulating day-head and real-time markets","category":"page"},{"location":"GTEP/#Problem-Formulation","page":"GTEP","title":"Problem Formulation","text":"","category":"section"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(1) Objective function","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"beginaligned\nminsum_g in G^+ tildeI_g x_g + sum_g in G t in T VCG_g N_t sum_h in H_t (c_sth + dc_sth) \n+ sum_l in L_+ tildeI_l Y_l + sum_d in D t in T VOLL_d N_t sum_h in H_t p_dth^LS + PT^rps sum_w in W pt_w^rps + PT^emis sum_w in W em_w^emis  (1)\nendaligned","category":"page"},{"location":"GTEP/#Constraints","page":"GTEP","title":"Constraints","text":"","category":"section"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(2)","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":" = ","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(3) Generator investment budget:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_g in G_+ tildeI_g x_g le IBG","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(4) Transmission line investment budget:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_l in L_+ tildeI_l y_l le IBL","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(5) Storage investment budget:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_s in S_+ tildeI_s z_s le IBS","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(6) Power balance:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_g in G_i P_gth + sum_s in S_i (dc_sth - c_sth) - sum_l in LS_i f_lth \n+ sum_l in LR_i f_lth = sum_d in D_i (P_dth - P_dth^LS)  forall i in I h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(7) Transmission power flow limit for existing transmission lines:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"- F_l^max le f_glth le F_l^max  forall g in G l in L^E h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(8) Transmission power flow limit for new installed transmission lines:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"- y_l F_l^max le f_glth le y_l F_l^max  forall g in G l in L^+ h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(9) Maximum capacity limits for existing power generation:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"0 le p_gth le P_g^max  forall g in G_E h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(10) Maximum capacity limits for installed power generation:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"0 le p_gth le P_g^max x_g  forall g in G_+ h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(11) Load shedding limit:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"0 le p_gth^LS le P_gth  forall d in D_i i in I h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(12) Renewables generation availability for the existing plants:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"p_gh le AFRE_gthi P_g^max forall g in G_E cap G_i cap (G^PV cup G^W) i in I h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(13) Renewables generation availability for new installed plants:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"p_gh le AFRE_gthi P_g^max x_g forall g in G_+ cap G_i cap (G^PV cup G^W) i in I h in H_t t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(14) Storage charging rate limit for existing units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"fracc_sthSC_s le SCAP_s  forall h in H_t t in T s in S_E","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(15) Storage discharging rate limit for existing units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"fracdc_sthSD_s le SCAP_s  forall h in H_t t in T s in S_E","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(16) Storage charging rate limit for new installed units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"fracc_sthSC_s le z_s SCAP_s  forall h in H_t t in T s in S_+","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(17) Storage discharging rate limit for new installed units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"fracdc_sthSD_s le z_s SCAP_s  forall h in H_t t in T s in S_+","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(18) Sate of charge limit for existing units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"0 le soc_sth le SECAP_s forall h in H_t t in T s in S_E","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(19) Sate of charge limit for new installed units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"0 le soc_sth le z_s SECAP_s forall h in H_t t in T s in S_+","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(20) Storage operation constraints:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"soc_sth = soc_sth-1 + epsilon_ch c_sth - fracdc_sthepsilon_dis  forall h in H_t t in T s in S","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(21) Daily 50% of storage level balancing for existing units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"soc_s1 = soc_send = 05 x SCAP_s s in S_E","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(22) Daily 50% of storage level balancing for new installed units:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"soc_st1 = soc_stend = 05 x z_s SCAP_s s in S_+","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(23) Resource adequacy:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_g in G_E (CC_g P_g^max) + sum_g in G_+ (CC_g P_g^max x_g) \n+ sum_s in S^E(CC_s SCAP_s) + sum_s in S^E(CC_s SCAP_s z_s) ge (1 + RM) PK","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(24) RPS policy - State total renewable energy generation:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"pw_gw = sum_t in T N_t sum_h in H_t p+gth  forall g in (bigcup_i in I_w G_i) cap (G^RPS) w in W","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(25) RPS policy - State renewable credits export limitation:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"pw_gw ge sum_w in WER_w pwi_gww  forall g in (bigcup_i in I_w G_i) cap (G^RPS) w in W","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(26) RPS policy - State renewable credits import limitation:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"pw_gw ge pwi_gww  forall g in (bigcup_i in I_w G_i) cap (G^RPS) w in W w in WIR_w","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(27) RPS policy - Renewable credits trading meets state RPS requirements:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"beginaligned\nsum_g in (bigcup_i in I_w G_i) cap (G^RPS) w in WIR_w pwi_gww\n- sum_g in (bigcup_i in I_w G_i) cap (G^RPS) w in WER_w pwi_gww + pt_w^rps \nge sum_t in T N_t sum_i in I_wh in H_t sum_d in D_i p_dth * RPS_w\nw in W\nendaligned","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(28) Cap & Trade - State carbon allowance cap:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"sum_g in (bigcup_i in I_w G_i) cap G^F a+gt - em_w^emis le ALW_tw  w in W t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(29) Cap & Trade - Balance between allowances and emissions:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"N_t sum_h in H_t EF_g p_gth = a_gt + b_gt-1 = b_gt  g in (bigcup_i in I_w G_i) cap G_F w in W t in T","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(30) Cap & Trade - No cross-year banking:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"b_g1 = b_gend = 0 g in G_F","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(31) Binary variables:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"x_g = 01   forall g in G_+\ny_l = 01   forall l in L_+\nz_s = 01   forall s in S_+","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"(32) Nonnegative variable:","category":"page"},{"location":"GTEP/","page":"GTEP","title":"GTEP","text":"a_gt b_gt p_gth p_dth^LS c_sth soc_sth pt^rps pw_gw pwi_gww em^emis \nge 0","category":"page"},{"location":"PCM/#Power-Balance","page":"PCM","title":"Power Balance","text":"","category":"section"},{"location":"PCM/","page":"PCM","title":"PCM","text":"The power balance constraint of the model ensures that electricity demand is met at every time step in each zone. As shown in the constraint, electricity demand, D_tz, at each time step and for each zone must be strictly equal to the sum of generation, Theta_yzt, from thermal technologies (mathcalH), curtailable variable renewable energy resources (mathcalVRE), must-run resources (mathcalMR), and hydro resources (mathcalW). At the same time, energy storage devices (mathcalO) can discharge energy, Theta_yzt to help satisfy demand, while when these devices are charging, Pi_yzt, they increase demand. For the case of flexible demand resources (mathcalDF), delaying demand, Pi_yzt, decreases demand while satisfying delayed demand, Theta_yzt, increases demand. Price-responsive demand curtailment, Lambda_szt, also reduces demand. Finally, power flows, Phi_lt, on each line l into or out of a zone (defined by the network map varphi^map_lz), are considered in the demand balance equation for each zone. By definition, power flows leaving their reference zone are positive, thus the minus sign in the below constraint. At the same time losses due to power flows increase demand, and one-half of losses across a line linking two zones are attributed to each connected zone. The losses function beta_lt(cdot) will depend on the configuration used to model losses (see Transmission).","category":"page"},{"location":"PCM/","page":"PCM","title":"PCM","text":"beginaligned\nsum_yin mathcalHTheta_yzt +sum_yin mathcalVRETheta_yzt +sum_yin mathcalMRTheta_yzt + sum_yin mathcalO(Theta_yzt-Pi_yzt) + \n sum_yin mathcalDF(-Theta_yzt+Pi_yzt) +sum_yin mathcalWTheta_yzt+ \n+ sum_sin mathcalSLambda_szt  - sum_lin mathcalL(varphi^map_lz times Phi_lt) -frac12 sum_lin mathcalL(varphi^map_lz times beta_lt(cdot)) = D_zt\n forall zin mathcalZ  t in mathcalT\nendaligned","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"CurrentModule = HOPE","category":"page"},{"location":"installation/#Installation","page":"Installation","title":"Installation","text":"","category":"section"},{"location":"installation/#1.-Install-Julia","page":"Installation","title":"1. Install Julia","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Install Julia language.","category":"page"},{"location":"installation/#2.-Download-HOPE-repository","page":"Installation","title":"2. Download HOPE repository","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"Clone OR download the HOPE repository to your local directory - click the green \"Code\" button on the HOPE main page and choose \"Download ZIP\" (remember to change the folder name to HOPE after you decompress zip file). You need to save the HOPE project in your home directory like: /yourpath/home/HOPE.  (Image: image)","category":"page"},{"location":"installation/#3.-Solver-Packages","page":"Installation","title":"3. Solver Packages","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"The open-source packages (i.e., Cbc, GLPK, Clp, etc.) will be automatically installed in the step 2. While the commercial (e.g., Groubi and CPLEX) solver packages (if needed) should be installed by users follow their instructions. ","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"pkg> add https://github.com/swang22/HOPE.jl","category":"page"},{"location":"reference/","page":"-","title":"-","text":"CurrentModule = HOPE","category":"page"},{"location":"reference/","page":"-","title":"-","text":"","category":"page"},{"location":"reference/","page":"-","title":"-","text":"Modules = [HOPE]","category":"page"},{"location":"reference/#HOPE.initiate_solver-Tuple{String, String}","page":"-","title":"HOPE.initiate_solver","text":"seconds = 1e-6\nlogLevel = 1e-6\nmaxSolutions = -1\nmaxNodes = -1\nallowableGap = -1\nratioGap = Inf\nthreads = 1\n\n\n\n\n\n","category":"method"},{"location":"#HOPE-Documentation","page":"Introduction","title":"HOPE Documentation","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"CurrentModule = HOPE","category":"page"},{"location":"#Overview","page":"Introduction","title":"Overview","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The Holistic Optimization Program for Electricity (HOPE) model is a transparent and open-source tool for evaluating electric sector transition pathways and policy scenarios regarding power system planning, system operation, optimal power flow, and market designs. It is a highly configurable and modulized tool coded in the  Julia language and optimization package JuMP.  The HOPE consists of multiple modes for modeling optimization problems of modern power systems and electricity markets, including:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"GTEP mode: a generation & transmission expansion planning model\nPCM mode: a production cost model\nOPF mode: (under development): an optimal power flow model\nDART mode: (under development): a bilevel market model for simulating day-head and real-time markets","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Users can select the proper mode of HOPE based on their research needs. Each mode is modeled as linear/mixed linear programming and can be solved with open-source (i.e., Cbc, GLPK, Clp, etc.) or commercial (e.g., Groubi and CPLEX) solver packages.","category":"page"},{"location":"#Contributors","page":"Introduction","title":"Contributors","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"The HOPE model was originally developed by a team of researchers in Prof. Benjamin F. Hobbs's group at Johns Hopkins University. The main contributors for current HOPE version include Dr. Shen Wang, Dr. Mahdi Mehrtash and Zoe Song.","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"CurrentModule = HOPE","category":"page"},{"location":"run_case/#Run-a-Case-in-HOPE","page":"Run a case","title":"Run a Case in HOPE","text":"","category":"section"},{"location":"run_case/#Using-VScode-to-Run-a-Case-(Recommend)","page":"Run a case","title":"Using VScode to Run a Case (Recommend)","text":"","category":"section"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"Install Visual Studio Code: Download VScode and install it.","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(1) Open the VScode, click the 'File' tab, select 'Open Folder...', and navigate to your home working directory:/yourpath/home (The home directory in the examples below is named Maryland-Electric-Sector-Transition).  ","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(2) In the VScode TERMINAL, type Julia and press the \"Enter\" button. Julia will be opened as below:","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(3) Type ] into the Julia package mode, and type activate HOPE (if you are in your home directory) or activate yourpath/home/HOPE (if you are not in your home directory), you will see prompt (@v1.8) pkg> changing to (HOPE) pkg>, which means the HOPE project is activated successfully. ","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(4) Type instantiate in the (HOPE) pkg prompt (make sure you are in your home directory, not the home/HOPE directory!).","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(5) Type st to check that the dependencies (packages that HOPE needs) have been installed. Type up to update the version of dependencies (packages). (This step may take some time when you install HOPE for the first time. After the HOPE is successfully installed, you can skip this step)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(6) If there is no error in the above processes, the HOPE model has been successfully installed! Then, press Backspace button to return to the Juila prompt. To run an example case (e.g., default Maryland 2035 case in PCM mode), type using HOPE, and type HOPE.run_hope(\"HOPE/ModelCases/MD_Excel_case/\"), you will see the HOPE is running: (Image: image) The results will be saved in yourpath/home/HOPE/ModelCases/MD_Excel_case/output.  (Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(7)  For your future new runs, you can skip steps 4 and 5, and just follow steps 1,2,3,6.   ","category":"page"},{"location":"run_case/#Using-System-Terminal-to-Run-a-Case","page":"Run a case","title":"Using System Terminal to Run a Case","text":"","category":"section"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"You can use a system terminal () either with a \"Windows system\" or a \"Mac system\" to run a test case. See details below.","category":"page"},{"location":"run_case/#Windows-users","page":"Run a case","title":"Windows users","text":"","category":"section"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(1) Open Command Prompt from Windows Start and navigate to your home path:/yourpath/home.","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(2) Type julia. Julia will be opened as below:","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(3) Type ] into the Julia package mode, and type activate HOPE (if you are in your home directory), you will see prompt (@v1.8) pkg> changing to (HOPE) pkg>, which means the HOPE project is activated successfully. ","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(4) Type instantiate in the (HOPE) pkg prompt. ( After the HOPE is successfully installed, you can skip this step)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(5) Type st to check that the dependencies (packages that HOPE needs) have been installed. Type up to update the version of dependencies (packages). (This step may take some time when you install HOPE for the first time. After the HOPE is successfully installed, you can skip this step)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(6) If there is no error in the above processes, the HOPE model has been successfully installed. Then, click Backspace to return to the Juila prompt. To run an example case (e.g., default Maryland 2035 case in PCM mode), type using HOPE, and type HOPE.run_hope(\"HOPE/ModelCases/MD_Excel_case/\"), you will see the HOPE is running:","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"The results will be saved in yourpath/home/HOPE/ModelCases/MD_Excel_case/output. ","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(Image: image)","category":"page"},{"location":"run_case/","page":"Run a case","title":"Run a case","text":"(7) For your future new runs, you can skip steps 4 and 5, and just follow steps 1,2,3,6.  ","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"CurrentModule = HOPE","category":"page"},{"location":"notation/#Notation","page":"Notation","title":"Notation","text":"","category":"section"},{"location":"notation/#Sets-and-Indices","page":"Notation","title":"Sets and Indices","text":"","category":"section"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"Notation Description\nD Set of demand, index d\nG Set of all types of generating units, index g\nH Set of hours, index h\nK Set of technology types, index k\nT Set of time periods (e.g., representative days of seasons), index t\nS Set of storage units, index s\nIJ Set of zones, index ij\nL Set of transmission corridors, index l\nW Set of states, index ww","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/#Subsets","page":"Notation","title":"Subsets","text":"","category":"section"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"Notation Description\nD_i Set of demand connected to zone i, a subset of D\nG^PV, G^W, G^F Set of solar, wind, and dispatchable generators, respectively, subsets of G\nG^RPS Set of generators could provide RPS credits, subsets of G\nG^L_l Set of generators linked to line i, subset of G\nG_i Set of generating units connected to zone i, subset of G\nG^EG^+ Set of existing/candidate generation units, index g, subset of G\nH_t Set of hours in time period (day) t, index h, subset of H\nS^ES^+ Set of existing/candidate storage units, subset of S\nS_i Set of storage units connected to zone i, subset of S\nL^EL^+ Set of existing/candidate transmission corridors\nLS_lLR_l Set of sending/receiving corridors for zone i, subset of L\nWIR_w Set of states that state w can import renewable credits from (includes w itself), subset of W\nWER_w Set of states that state w can export renewable credits to (excludes w itself), subset of W","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/#Parameters","page":"Notation","title":"Parameters","text":"","category":"section"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"Notation Description\nALW_tw Total carbon allowance in time period t in state w, ton\nAFRE_ghi Availability factor of renewable energy source g in hour h in zone i, g in G^PV bigcup G^W\nCC_gs Capacity credit of resource gs, unitless\nCP_g Carbon price of generation g in G^F, M/t\nEF_g Carbon emission factor of generator g, t/MWh\nELMT_w Carbon emission limits at state w t\nF^max_l Maximum capacity of transmission corridor/line l, MW\ntildeI_g Investment cost of candidate generator g, M$\ntildeI_l Investment cost of  transmission line l, M$\ntildeI_s Investment cost of  storage unit s, M$\nIBG Total investment budget for generators\nIBL Total investment budget for transmission lines\nIBS Total investment budget for storages\nN_t Number of time periods (days) represented by time period (day) t per year, /sum{t /in T} N{t}\nNI_ih Net interchange in zone i in hour $h, MWh\nP_dh Active power demand, MW\nPK Peak power demand, MW\nPT^rps RPS volitation penalty, /MWh\nPT^emis Carbon emission volitation penalty, /t\nP_g^minP_g^max Minimum/Maximum power generation of unit g, MW\nRPS_w Renewable portfolio standard in state w, %, unitless\nRM Planning reserve margin, unitless\nSCAP_s Maximum capacity of storage unit s, MW\nSECAP_s Maximum energy capacity of storage unit s, MWh\nSC_sSD_s The maximum rates of charging/discharging, unitless\nVCG_g Variable cost of generation unit g, / MWh\nVCS_g Variable (degradation) cost of storage unit s, / MWh\nVOLL_d Value of loss of load d, /MWh\nepsilon_ch Charging efficiency of storage unit s, unitless\nepsilon_dis Discharging efficiency of storage unit s, unitless","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/#Variables","page":"Notation","title":"Variables","text":"","category":"section"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"Notation Description\na_gt Bidding carbon allowance of unit g in time period t, ton\nb_gt Banking of allowance of g in time period t, ton\np_gth Active power generation of unit g in time period t hour h, MW\npw_gw Total renewable generation of unit g in state w, MWh\np^LS_dth Load shedding of demand d in time period t in hour h, MW\npt^rps_w Amount of active power violated RPS policy in state w, MW\npwi_gww State w imported renewable credits of from state w annually, MWh\nf_lth Active power of generator g through transmission corridor/line l in time period t and hour h, MW\nem^emis_w Carbon emission violated emission limit in state w, ton\nx_g Decision variable for candidate generator g, binary\ny_l Decision variable for candidate line l, binary\nz_s Decision variable for candidate storage s, binary\nsoc_sth State of charge level of storage s in time period t in hour h, MWh\nc_sth Charging power of storage s from grid in time period t in hour h, MW\ndc_sth Discharging power of storage s from grid in time period t in hour h, MW","category":"page"},{"location":"notation/","page":"Notation","title":"Notation","text":"","category":"page"}]
}
