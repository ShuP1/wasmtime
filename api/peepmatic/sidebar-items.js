initSidebarItems({"enum":[["Constraint","Contraint operators."],["ConstraintOperand","An operand of a precondition's constraint."],["DynAstRef","A reference to any AST node."],["Pattern","A structural pattern, potentially with wildcard variables for matching whole subtrees."],["Rhs","The right-hand side of an optimization that contains the instructions to replace any matched left-hand side with."],["TraversalEvent","A low-level DFS traversal event: either entering or exiting the traversal of an AST node."],["ValueLiteral","An integer or boolean value literal."]],"fn":[["automatize","Construct an automaton from a set of linear optimizations."],["compile_file","Compile the given DSL file into a compact peephole optimizations automaton!"],["compile_str","Compile the given DSL source text down into a compact peephole optimizations automaton."],["linearize","Translate the given AST optimizations into linear optimizations."],["match_in_same_order","Ensure that we emit match operations in a consistent order."],["remove_unnecessary_nops","99.99% of nops are unnecessary; remove them."],["sort_least_to_most_general","Sort a set of optimizations from least to most general."],["sort_lexicographically","Sort the linear optimizations lexicographically."],["verify","Verify and type check a set of optimizations."]],"struct":[["Bfs","A breadth-first traversal of an AST"],["Boolean","A boolean literal."],["ConditionCode","A condition code."],["Constant","A symbolic constant."],["Dfs","A depth-first traversal of an AST."],["Integer","An integer literal."],["Lhs","A left-hand side describes what is required for a particular optimization to apply."],["Operation","An operation with an operator, and operands of type `T`."],["Optimization","A complete optimization: a left-hand side to match against and a right-hand side replacement."],["Optimizations","A set of optimizations."],["Precondition","A precondition adds additional constraints to a pattern, such as \"$C must be a power of two\"."],["Unquote","An unquote operation."],["Variable","A variable that matches any subtree."],["VerifyError","A verification or type checking error."]],"trait":[["Ast","A trait implemented by all AST nodes."],["ChildNodes","Enumerate the child AST nodes of a given node."],["Span","A trait for getting the span where an AST node was defined."]],"type":[["VerifyResult","Either `Ok(T)` or `Err(VerifyError)`."]]});