SELECT  Asignatura , CODIGOASIGNATURA, A.IdGrupo, NumeroGrupo, 
        NUMERODOCUMENTO || '-' || Trim(PRIMERNOMBRE) || ' ' || Trim(SEGUNDONOMBRE) || ' ' || 
        Trim(PRIMERAPELLIDO) || ' ' || Trim(SEGUNDOAPELLIDO) Docente,
              (Case When  (select count (*) from tb_evn_notasparciales n, tb_evn_programacionactividad p, tb_evn_programacionevalmodulo v
            where N.IDPROGRAMACIONACTIVIDAD=P.IDPROGRAMACIONACTIVIDAD
            and P.IDPROGRAMACIONEVALMODULO=V.IDPROGRAMACIONEVALMODULO
            and V.IDGRUPO=a.idgrupo
            and N.FECHAREGISTRO is not null)> 0 Then 'Grupos Evaluados'
              Else 'Grupos No Evaluados'
              End) Ha_Evaluado  ,
        (Select PeriodoAcademico From Tb_RyC_PeriodoAcademico R Where R.IdPeriodoAcademico = :IdPer) Periodo,
(SELECT CODIGOCC||'-'||TRIM(CENTROCOSTO)   
            FROM VI_CC_CENTROCOSTO C
            WHERE B.IDCENTROCOSTOSENCARGADO = CODIGOCC)  CENTROCOSTO
FROM    TB_MAT_GRUPO A 
   JOIN TB_PDE_ASIGNATURAS B ON (A.IDASIGNATURA = B.IDASIGNATURA AND A.ACTIVO = 1)
   JOIN TB_MAT_DOCENTEMODULO C ON (A.IDGRUPO = C.IDGRUPO AND C.ACTIVO = 1 AND C.DOCENTERESPONSABLE =1)
   JOIN VI_GEN_PERSONANATURAL D ON (C.IDTERCERODOCENTE = D.IDTERCERO)
WHERE   IDPERIODOACADEMICO = :IdPer 
And B.IdCentroCostosEncargado = :CC 
And IdTipoEvaluacion <> 1935
And NumeroGrupo < 200
ORDER BY 1, 7, CODIGOASIGNATURA, NUMEROGRUPO